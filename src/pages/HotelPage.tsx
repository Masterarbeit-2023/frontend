import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Hotel from "../models/Hotel";
import Container from "../components/Container";
import Room from "../models/Room";
import RoomOverviewContainer from "../components/hotel/RoomOverviewContainer";

const HotelPage = () => {
  const paramStartDate = useParams()["startDate"];
  const paramEndDate = useParams()["endDate"];
  const paramAdults = useParams()["adults"];
  const paramChildren = useParams()["children"];
  const paramRooms = useParams()["rooms"];
  let paramRoomsNumber = 0;
  if (paramRooms != undefined) {
    paramRoomsNumber = +paramRooms;
  }
  const tmpRoomArrayForInitState: (Room | null)[] = [];
  for (let i = 0; i < paramRoomsNumber; i++) {
    tmpRoomArrayForInitState.push(null);
  }

  const [id, setId] = useState(useParams()["id"]);
  const [hotel, setHotel] = useState<Hotel>();
  const [rooms, setRooms] = useState<(Room | null)[]>(tmpRoomArrayForInitState);
  const [roomAdults, setRoomAdults] = useState<number[]>([]);
  const [roomChildren, setRoomChildren] = useState<number[]>([]);
  const [roomPets, setRoomPets] = useState<boolean[]>([]);

  const onUpdateRoom = (
    index: number,
    adults: number,
    children: number,
    pets: boolean
  ) => {
    const tmpAdults = roomAdults.map((adult, i) => {
      if (i === index) {
        return adults;
      } else {
        return adult;
      }
    });
    const tmpChildren = roomChildren.map((child, i) => {
      if (i === index) {
        return children;
      } else {
        return child;
      }
    });
    const tmpPets = roomPets.map((pet, i) => {
      if (i === index) {
        return pets;
      } else {
        return pet;
      }
    });

    setRoomAdults(tmpAdults);
    setRoomChildren(tmpChildren);
    setRoomPets(tmpPets);

    console.log("Update");
  };

  useEffect(() => {
    if (hotel == undefined) {
      fetch(`http://localhost:8080/hotels/entity?id=${id}`)
        .then((response) => response.json())
        .then((data) => {
          setHotel(data);
        });
    }
  }, [id]);

  const handleRoomSelection = (newIndex: number, newRoom: Room) => {
    const nextRooms = rooms.map((room, index) => {
      if (index === newIndex) {
        return newRoom;
      } else {
        return room;
      }
    });
    setRooms(nextRooms);
  };

  useEffect(() => {
    if (
      paramAdults != undefined &&
      paramChildren != undefined &&
      paramRooms != undefined
    ) {
      const adultsRest = +paramAdults % +paramRooms;
      const numberAdultsPerRoom = (+paramAdults - adultsRest) / +paramRooms;

      const childrenRest = +paramChildren % +paramRooms;
      const numberChildrenPerRoom =
        (+paramChildren - childrenRest) / +paramRooms;

      const tmpAdultsArr: number[] = [];
      const tmpChildrenArr: number[] = [];
      const tmpPetsArr = [];
      const tmpEditArr = [];
      for (let i = 0; i < +paramRooms; i++) {
        if (i == 0) {
          tmpAdultsArr.push(numberAdultsPerRoom + adultsRest);
          tmpChildrenArr.push(numberChildrenPerRoom + childrenRest);
        } else {
          tmpAdultsArr.push(numberAdultsPerRoom);
          tmpChildrenArr.push(numberChildrenPerRoom);
        }
        tmpPetsArr.push("Nein");
        tmpEditArr.push(false);
      }
      setRoomAdults(tmpAdultsArr);
      setRoomChildren(tmpChildrenArr);
      //setRoomPets(tmpPetsArr);
    }
  }, [paramRooms]);
  console.log(rooms);

  return (
    <div className="pt-20">
      <Container>
        <div className="flex justify-between items-baseline">
          <p className="text-2xl font-bold">{hotel?.name}</p>
          <p className="text-3xl ">Diese Zimmer sind verfügbar</p>
          <p>Sortieren</p>
        </div>
        {paramRooms != undefined &&
          hotel != undefined &&
          paramStartDate != undefined &&
          paramEndDate != undefined &&
          [...Array(+paramRooms)].map((e, i) => (
            <RoomOverviewContainer
              key={i}
              index={i}
              hotel={hotel}
              adults={0}
              children={0}
              pets={false}
              onUpdateRoom={onUpdateRoom}
              startDate={paramStartDate}
              endDate={paramEndDate}
              handleSelectRoom={handleRoomSelection}
            />
          ))}
      </Container>
    </div>
  );
};

export default HotelPage;

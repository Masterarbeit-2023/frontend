import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Hotel from "../models/Hotel";
import Container from "../components/Container";
import Room from "../models/Room";
import RoomContainer from "../components/hotel/RoomContainer";

const HotelPage = () => {
  const paramStartDate = useParams()["startDate"];
  const paramEndDate = useParams()["endDate"];
  const paramAdults = useParams()["adults"];
  const paramChildren = useParams()["children"];
  const paramRooms = useParams()["rooms"];

  const [id, setId] = useState(useParams()["id"]);
  const [hotel, setHotel] = useState<Hotel>();
  const [rooms, setRooms] = useState<Room[]>();

  useEffect(() => {
    if (hotel == undefined) {
      fetch(`http://localhost:8080/hotels/entity?id=${id}`)
        .then((response) => response.json())
        .then((data) => {
          setHotel(data);
        });
    } else {
      fetch(`http://localhost:8080/rooms`)
        .then((response) => response.json())
        .then((data) => {
          setRooms(data);
        });
    }
  }, [id, hotel]);
  return (
    <div className="pt-20">
      <Container>
        <p className="text-2xl font-bold">{hotel?.name}</p>
        {rooms != undefined && <RoomContainer rooms={rooms} />}
      </Container>
    </div>
  );
};

export default HotelPage;

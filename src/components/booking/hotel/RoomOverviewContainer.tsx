import { Button, Checkbox, Input } from "antd";
import RoomContainer from "./RoomContainer";
import { useEffect, useState } from "react";
import Room from "../../../models/Room";
import Hotel from "../../../models/Hotel";
import { EditOutlined, SaveOutlined } from "@ant-design/icons";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import { on } from "events";
import BookingRoom from "../../../models/BookingRoom";

interface RoomOverviewContainerProps {
  index: number;
  hotel: Hotel;
  startDate: string;
  endDate: string;
  adults: number;
  children: number;
  pets: boolean;
  onUpdateRoom: any;
  handleSelectRoom: any;
  bookingRooms: BookingRoom[];
}

const RoomOverviewContainer = (props: RoomOverviewContainerProps) => {
  const [editRoom, setEditRoom] = useState(false);
  const [rooms, setRooms] = useState<Room[]>();
  const [adults, setAdults] = useState(props.adults);
  const [children, setChildren] = useState(props.children);
  const [pets, setPets] = useState(props.pets);

  const toggle = () => {
    setEditRoom(!editRoom);
  };

  useEffect(() => {
    fetch(`http://localhost:8080/rooms/getAvailableRooms?hotelId=${1}&startDate=${props.startDate}&endDate=${props.endDate}&adults=${adults}&children=${children}&petsAllowed=${pets}`)
      .then((response) => response.json())
      .then((data) => {
        setRooms(data);
      });
  }, [adults, children, pets]);

  const handleChangeAdults = (value: any) => {
    setAdults(+value.target.value);
  };

  const handleChangeChildren = (value: any) => {
    setChildren(+value.target.value);
  };

  const onChange = (e: CheckboxChangeEvent) => {
    setPets(e.target.checked);
  };

  const onSave = () => {
    toggle();
    props.onUpdateRoom(props.index, adults, children, pets);
  };

  let petsText = "Ja";
  if (!pets) {
    petsText = "Nein";
  }

  return (
      <div className={""}>
        <p className="text-center text-3xl mt-12">{props.index + 1}. Zimmer</p>
        {!editRoom && (
            <div className="flex text-center justify-center p-3">
              <Button
                  className="flex items-center justify-center"
                  shape="circle"
                  icon={<EditOutlined />}
                  onClick={toggle}
              />
              <p>Erwachsene: {adults}&nbsp; </p>
              <p>Kinder: {children}&nbsp; </p>
              <p>Haustiere: {petsText}&nbsp; </p>
            </div>
        )}
        {editRoom && (
            <div className="flex text-center items-center justify-center w-2/3 mx-auto p-3">
              <Button
                  className="flex items-center justify-center mx-2"
                  shape="circle"
                  icon={<SaveOutlined />}
                  onClick={onSave}
              />

              <Input
                  className="mx-2"
                  addonBefore="Erwachsene"
                  type="number"
                  value={adults}
                  onChange={handleChangeAdults}
              />
              <Input
                  className="mx-2"
                  addonBefore="Kinder"
                  type="number"
                  value={children}
                  onChange={handleChangeChildren}
              />
              <Checkbox className="flex items-center mx-2" onChange={onChange} checked={pets}>
                Haustiere
              </Checkbox>
            </div>
        )}

        {rooms != undefined && <RoomContainer rooms={rooms} roomNumber={props.index} handleSelectRoom={props.handleSelectRoom}  bookingRooms={props.bookingRooms}/>}
      </div>
  );
};

export default RoomOverviewContainer;

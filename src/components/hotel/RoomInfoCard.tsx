import {  ExpandOutlined, TeamOutlined } from "@ant-design/icons";
import Room from "../../models/Room";
import { Button, Popover } from "antd";
import RoomRatePopOver from "./RoomRatePopOver";
import Rate from "../../models/Rate";

interface RoomInfoCardProps {
  room: Room;
  roomImage: string;
  roomNumber: number;
  handleSelectRoom: any;
}

const RoomInfoCard = (props: RoomInfoCardProps) => {
  const room = props.room;

  const handleSelectRoom = (room: Room) =>{
    props.handleSelectRoom(props.roomNumber, room);
  }

  const lowestPrice = room.rates.sort((a: Rate, b: Rate) => a.price-b.price)[0].price

  return (
    <Popover content={<RoomRatePopOver room={room} roomImage={props.roomImage} handleSelectRoom={handleSelectRoom} />} trigger={"click"} placement="bottom" className="shadow rounded-lg my-6 hover:scale-105 hover:bg-blue-50 transition-all">
      <div className="w-full">
        <img className="w-full rounded-t-lg" src={props.roomImage} />
      </div>
      <div className="w-full p-6">
        <p className="font-bold text-xl">{room.name}</p>
        <div className="flex items-center">
          <div className="flex items-center">
            <TeamOutlined /> <p className="pl-3">{room.numberOfPersons}</p>
          </div>
          <div className="flex items-center pl-6">
            <ExpandOutlined /> <p className="pl-3">{room.roomSizeInSqm}m²</p>
          </div>
        </div>
        <div className="flex border-t-2 mt-3 pt-3 justify-between">
            <div className="w-2/3 flex items-baseline">
                <p className="text-md">ab&nbsp;</p>
                <p className="text-xl">{lowestPrice} €</p>
            </div>
            <div className="w-1/3 flex justify-end">
                <Button>Weiter</Button>
            </div>
        </div>
      </div>
    </Popover>
  );
};

export default RoomInfoCard;

import { CheckOutlined } from "@ant-design/icons";
import Room from "../../models/Room";
import { Button } from "antd";
import { useState } from "react";
import RoomRate from "./RoomRate";

interface RoomRatePopOverProps {
  room: Room;
  roomImage: string;
  handleSelectRoom: any;
}

const RoomRatePopOver = (props: RoomRatePopOverProps) => {
  const room = props.room;

  const handleSelectRoom = () => {
    props.handleSelectRoom(room);
  };
  return (
    <div className="mb-6">
      <div className="flex">
        <div className="w-56">
          <p className="font-bold text-xl">{room.name}</p>
          <p className="text-xs">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam
          </p>
          <p className="font-bold mt-3">Ausstattung</p>
          {room.facilities.map((facility, index) => (
            <div className="flex items-center">
              <CheckOutlined />
              <p className="pl-3">{facility}</p>
            </div>
          ))}
        </div>
        <div className="w-96">
          <img className=" rounded-lg" src={props.roomImage} />
        </div>
      </div>
      <div className="my-3 border" />
      {room.rates.map((rate, index) => (
            <RoomRate room={room} handleSelectRoom={handleSelectRoom} rate={rate} />
          ))}
    </div>
  );
};

export default RoomRatePopOver;

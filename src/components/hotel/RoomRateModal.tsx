import { CheckOutlined } from "@ant-design/icons";
import Room from "../../models/Room";
import { Button } from "antd";
import { useState } from "react";
import RoomRate from "./RoomRate";
import Rate from "../../models/Rate";

interface RoomRatePopOverProps {
  room: Room;
  roomImage: string;
  handleSelectRoom: any;
  selectedRate?: Rate;
}

const RoomRateModal = (props: RoomRatePopOverProps) => {
  const room = props.room;

  const handleSelectRoom = (rate: Rate) => {
    props.handleSelectRoom(room, rate);
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
            <div className="flex items-center" key={index}>
              <CheckOutlined />
              <p className="pl-3">{facility.name}</p>
            </div>
          ))}
        </div>
        <div className="w-96">
          <img className=" rounded-lg" src={props.roomImage} />
        </div>
      </div>
      <div className="my-3 border" />
      {room.rates.map((rate, index) => (
          // @ts-ignore
            <RoomRate handleSelectRoom={handleSelectRoom} rate={rate} key={index} selected={rate.id === props.selectedRate.id}/>
          ))}
    </div>
  );
};

export default RoomRateModal;

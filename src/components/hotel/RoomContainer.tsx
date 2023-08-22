import { useEffect, useState } from "react";
import ResponseData from "../../models/ResponseData";
import Room from "../../models/Room";
import RoomInfoCard from "./RoomInfoCard";

interface RoomContainerProps {
  rooms: Room[];
}

const RoomContainer = (props: RoomContainerProps) => {
  const [roomImages, setRoomImages] = useState<string[]>([]);

  const API_KEY = "IcND4OlRbmTA23qGFJuxyWZXi6vDnOf48k1ArxkTsdLARynK6mZjyhEj";

  const fetchRoomImages = async () => {
    const url = `https://api.pexels.com/v1/search?query=hotel+room`;

    const response = await fetch(url, {
      headers: {
        Authorization: API_KEY,
      },
    });
    const data: ResponseData = await response.json();
    // @ts-ignore
    setRoomImages(data.photos.map((photo) => photo.src.large));
  };

  useEffect(() => {
    fetchRoomImages();
  }, []);

  return (
    <div className=" grid gap-6 grid-cols-3">
      {props.rooms.map((room, index) => (
        <RoomInfoCard key={index} room={room} roomImage={roomImages[index + 2]} />
      ))}
    </div>
  );
};

export default RoomContainer;

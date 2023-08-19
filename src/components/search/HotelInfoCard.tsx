import { useState } from "react";
import maps from "../../maps.png";
import Hotel from "../../models/Hotel";
import { CheckOutlined } from "@ant-design/icons";
import { Button, Tabs } from "antd";
import HotelInfoCardInfo from "./HotelInfoCardInfo";
import HotelInfoCardImages from "./HotelInfoCardImages";
import HotelInfoCardImagesRating from "./HotelInfoCardImagesRating";

interface HotelInfoCardProps {
  hotel: Hotel;
}

const HotelInfoCard = (props: HotelInfoCardProps) => {
  const [open, setOpen] = useState(false);

  let bottomBorder = "";
  if (open) {
    bottomBorder = " border-b";
  }

  return (
    <div className="rounded-md  w-full shadow-lg">
      <div
        className={
          "w-full h-full flex rounded-lg justify-between" + bottomBorder
        }
      >
        <div className="flex">
          <img className="w-1/3 h-40 rounded-l-lg" src={maps} />
          <div className=" p-2 text-sm">
            <p className="font-bold mb-6">{props.hotel.name}</p>
            <p className="mb-3">16.0 km bis zum Zentrum</p>
            <div className="flex">
              <p className="font-bold">8.1 - Sehr gut </p>
              <p>(3000) Bewertungen</p>
            </div>
          </div>
        </div>
        <div className="w-1/2 m-3 text-xs rounded-lg border text-green-600 border-green-500 bg-green-100 p-1">
          <div className="h-2/3">
            <CheckOutlined /> Kostenlose Stornierung
          </div>
          <div className="flex h-1/3 justify-between">
            <Button onClick={(e) => setOpen(!open)}>Infos</Button>
            <Button className="p-1 flex items-center bg-green-500 text-white bottom-0">
              Zum Angebot
            </Button>
          </div>
        </div>
      </div>
      {open && (
        <div>
          <Tabs
            defaultActiveKey="1"
            centered
            items={new Array(3).fill(null).map((_, i) => {
              const id = String(i + 1);
              let label = "";
              let children = <div></div>;

              if(id == "1") {
                label = "Info";
                children = <HotelInfoCardInfo hotel={props.hotel} />
              } else if(id == "2") {
                label = "Bilder";
                children = <HotelInfoCardImages hotel={props.hotel} />
              } else if (id == "3") {
                label = "Bewertung";
                children = <HotelInfoCardImagesRating hotel={props.hotel} />
              }

              return {
                label: label,
                key: id,
                children: children,
              };
            })}
          />
        </div>
      )}
    </div>
  );
};

export default HotelInfoCard;

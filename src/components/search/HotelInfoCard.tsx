import { useEffect, useState } from "react";
import maps from "../../maps.png";
import Hotel from "../../models/Hotel";
import { CheckOutlined } from "@ant-design/icons";
import { Button, Tabs } from "antd";
import HotelInfoCardInfo from "./HotelInfoCardInfo";
import HotelInfoCardImages from "./HotelInfoCardImages";
import HotelInfoCardRating from "./HotelInfoCardRating";

interface HotelInfoCardProps {
  hotel: Hotel;
  cityName: string
}


function toRadians(degrees: number): number {
  return (degrees * Math.PI) / 180;
}

function getDistance(
  coord1: [number, number],
  coord2: [number, number]
): number {
  const R = 6371e3; // Earth's radius in meters
  const lat1Rad = toRadians(coord1[0]);
  const lat2Rad = toRadians(coord2[0]);
  const deltaLat = toRadians(coord2[0] - coord1[0]);
  const deltaLon = toRadians(coord2[1] - coord1[1]);

  const a =
    Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
    Math.cos(lat1Rad) *
      Math.cos(lat2Rad) *
      Math.sin(deltaLon / 2) *
      Math.sin(deltaLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c; // Distance in meters
}

const HotelInfoCard = (props: HotelInfoCardProps) => {
  const [open, setOpen] = useState(false);
  const [distanceToCenter, setDistanceToCenter] = useState(0);

  let bottomBorder = "";
  if (open) {
    bottomBorder = " border-b";
  }
  let averageRatingText = "";
  const averageRating = props.hotel.rating.score;
  if (averageRating >= 8.5){
    averageRatingText = "Hervorragend";
  } else if (averageRating >= 8.0) {
    averageRatingText = "Sehr gut";
  } else if (averageRating >= 7.5) {
    averageRatingText = "Gut";
  } else if ( averageRating >= 7.0) {
    averageRatingText = "Angemessen";
  } else {
    averageRatingText = "Akzeptabel";
  }

  useEffect(() => {
    if (props.cityName) {
      fetch(
        `https://nominatim.openstreetmap.org/search?city=${props.cityName}&format=json`
      )
        .then((response) => response.json())
        .then((data) => {
          if (data && data.length > 0) {
            fetch(
              `https://nominatim.openstreetmap.org/search?city=${props.hotel.address.city}&street=${props.hotel.address.street}+${props.hotel.address.houseNumber}&format=json`
            )
              .then((response) => response.json())
              .then((data2) => {
                if (data2 && data2.length > 0) {
                  setDistanceToCenter(Math.round(getDistance([data[0].lat, data[0].lon], [data2[0].lat, data2[0].lon]) / 100) / 10)
                }
              });
          }
        });
    }
  }, [props.cityName]);

  return (
    <div className="rounded-md w-full shadow-lg mt-6 bg-blue-50">
      <div
        className={
          "w-full h-full flex rounded-lg justify-between" + bottomBorder
        }
      >
        <div className="flex">
          <img className="w-1/3 h-40 rounded-l-lg" src={maps} />
          <div className=" p-2 text-sm">
            <p className="font-bold mb-6">{props.hotel.name}</p>
            <p className="mb-3">{distanceToCenter} km bis zum Zentrum</p>
            <div className="flex">
              <p className="font-bold">{averageRating} - Sehr gut&nbsp;</p>
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
                children = <HotelInfoCardRating hotel={props.hotel} />
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

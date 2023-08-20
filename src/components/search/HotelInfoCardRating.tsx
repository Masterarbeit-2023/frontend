import { InfoCircleOutlined } from "@ant-design/icons";
import { Select, Tooltip } from "antd";
import Hotel from "../../models/Hotel";
import HotelInfoCardRatingHotel from "./HotelInfoCardRatingHotel";

interface HotelInfoCardRatingProps {
  hotel: Hotel;
}

const HotelInfoCardRating = (props: HotelInfoCardRatingProps) => {
  let averageRatingText = "";
  const averageRating = props.hotel.rating.score;
  if (averageRating >= 8.5) {
    averageRatingText = "Hervorragend";
  } else if (averageRating >= 8.0) {
    averageRatingText = "Sehr gut";
  } else if (averageRating >= 7.5) {
    averageRatingText = "Gut";
  } else if (averageRating >= 7.0) {
    averageRatingText = "Angemessen";
  } else {
    averageRatingText = "Akzeptabel";
  }

  const handleChange = (value: string) => {
    
  };
  return (
    <div className="p-3">
      <h1 className="font-bold text-xl mb-6">Bewertung</h1>
      <div className="flex text-3xl">
        <p className="font-bold">{props.hotel.rating.score}</p>
        <p>/10</p>
      </div>
      <div className="flex items-center mb-3">
        <p className="font-thin text-sm pr-1">{averageRatingText}</p>
        <Tooltip title="Berechnet aus dem Durchschnitt aller Gästebewertungen">
          <InfoCircleOutlined />
        </Tooltip>
      </div>
      <HotelInfoCardRatingHotel rating={props.hotel.rating} />
    </div>
  );
};

export default HotelInfoCardRating;

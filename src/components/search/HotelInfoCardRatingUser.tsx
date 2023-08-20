import { Select } from "antd";
import Rating from "../../models/Rating";
import HotelInfoCardRatingUserEntry from "./HotelInfoCardRatingUserEntry";
import { useState } from "react";

interface HotelInfoCardRatingUserProps {
  ratings: Rating[];
}

const HotelInfoCardRatingUser = (props: HotelInfoCardRatingUserProps) => {
  const [ratings, setRatings] = useState(props.ratings);

  const handleChange = (value: string) => {
    if (value == "all") {
      setRatings(props.ratings)
    } else if( value == "positiv") {
      setRatings(props.ratings.filter(r => r.score >= 7))
    } else if(value == "negativ"){
      setRatings(props.ratings.filter(r => r.score < 7))
    }
  };

  return (
    <div>
      <h1 className="font-bold text-xl mb-6">Bewertung</h1>
      <Select
        className="w-1/2 ml-3"
        defaultValue="all"
        onChange={handleChange}
        options={[
          { value: "all", label: "Alle Bewertungen" },
          { value: "positiv", label: "Positiv" },
          { value: "negativ", label: "Negativ" },
        ]}
      />
      {ratings.map((rating, index) => (
          <HotelInfoCardRatingUserEntry key={index} rating={rating} />
        ))}
    </div>
  );
};

export default HotelInfoCardRatingUser;

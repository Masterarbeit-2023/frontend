import Rating from "../../models/Rating";
import HotelInfoCardRatingHotelEntry from "./HotelInfoCardRatingHotelEntry";

interface HotelInfoCardRatingHotelProps {
  rating: Rating;
}

const HotelInfoCardRatingHotel = (props: HotelInfoCardRatingHotelProps) => {
    const rating = props.rating;
  return <div className="grid grid-cols-2 gap-x-16 gap-y-3 w-full">
    <HotelInfoCardRatingHotelEntry name={"Lage"} rating={rating.location} />
    <HotelInfoCardRatingHotelEntry name={"Komfort"} rating={rating.comfort} />
    <HotelInfoCardRatingHotelEntry name={"Zimmer"} rating={rating.room} />
    <HotelInfoCardRatingHotelEntry name={"Ausstattung"} rating={rating.equipment} />
    <HotelInfoCardRatingHotelEntry name={"Service"} rating={rating.service} />
    <HotelInfoCardRatingHotelEntry name={"Gebäude"} rating={rating.building} />
    <HotelInfoCardRatingHotelEntry name={"Frühstück"} rating={rating.breakfast} />
    <HotelInfoCardRatingHotelEntry name={"Preis-Leistungs-Verhältnis"} rating={rating.pricePerformanceRatio} />
    <HotelInfoCardRatingHotelEntry name={"Essen/Trinken"} rating={rating.food} />
    <HotelInfoCardRatingHotelEntry name={"Sauberkeit"} rating={rating.cleanliness} />
  </div>;
};

export default HotelInfoCardRatingHotel;

import Hotel from "../../models/Hotel";
import HotelInfoCard from "./HotelInfoCard";

interface HotelInfoCardContainerProps {
    hotels: Hotel[]
}

const HotelInfoCardContainer = (props: HotelInfoCardContainerProps) => {

    return (
        <div className="mb-6">
            {props.hotels.map((hotel, index) => (
          <HotelInfoCard key={index} hotel={hotel} cityName="Hamburg" />
        ))}
        </div>
    );
}

export default HotelInfoCardContainer;
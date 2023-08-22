import Hotel from "../../models/Hotel";
import HotelInfoCard from "./HotelInfoCard";

interface HotelInfoCardContainerProps {
  hotels: Hotel[];
  startDate: string;
  endDate: string;
  adults: number;
  children: number;
  rooms: number;
  cityName: string;
  hotelImages: string[];
  roomImages: string[];
}

const HotelInfoCardContainer = (props: HotelInfoCardContainerProps) => {
  return (
    <div className="mb-6">
      {props.hotels.map((hotel, index) => (
        <HotelInfoCard
          key={index}
          hotel={hotel}
          cityName={props.cityName}
          startDate={props.startDate}
          endDate={props.endDate}
          adults={props.adults}
          children={props.children}
          rooms={props.rooms}
          hotelImage={props.hotelImages[index]}
          roomImages={props.roomImages.slice(
            3 * index + 1,
            3 * (index + 1) + 1
          )}
        />
      ))}
    </div>
  );
};

export default HotelInfoCardContainer;

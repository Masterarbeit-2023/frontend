import Hotel from "../../models/Hotel";
import MapComponent from "./MapComponent";

interface HotelInfoCardInfoProps {
  hotel: Hotel;
}
const HotelInfoCardInfo = (props: HotelInfoCardInfoProps) => {
  const address = props.hotel.address;
  return (
    <div>
      <div className="px-6">
        <h1 className="font-bold text-lg">Ausstattungen und Services</h1>
        <div className="grid grid-cols-3 list-disc">
        {props.hotel.facilities.map((facility, index) => (
          <li key={index}>{facility}</li>
        ))}
      </div>

        <h1 className="font-bold text-lg">Standort</h1>
      </div>
      
      <MapComponent hotel={props.hotel}/>
      
      <div className="p-6 ">
        <h1 className="font-bold text-xs">Anreise/Abreise</h1>
        <p>Anreise: {props.hotel.checkIn} Uhr</p>
        <p>Abreise: {props.hotel.checkOut} Uhr</p>
        
        <h1 className="font-bold text-xs pt-3">Adresse</h1>
        <p>{address.street}&nbsp;{address.houseNumber}</p>
        <p>{address.postalCode}&nbsp;{address.city}</p>
        <p>{address.country}</p>
      </div>
    </div>
  );
};

export default HotelInfoCardInfo;

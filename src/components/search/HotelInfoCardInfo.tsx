import Hotel from "../../models/Hotel";
import MapComponent from "./MapComponent";

interface HotelInfoCardInfoProps {
  hotel: Hotel;
}
const services = ["Balkon", "Balkon", "Balkon", "Balkon", "Balkon", "Balkon", "Balkon", "Balkon", "Balkon", "Balkon", "Balkon", "Balkon", "Balkon", "Balkon", "Balkon", "Balkon", "Balkon", "Balkon", "Balkon", "Balkon", "Balkon", "Balkon", "Balkon", "Balkon", "Balkon", "Balkon", "Balkon", "Balkon", "Balkon", "Balkon", "Balkon", "Balkon"];
const HotelInfoCardInfo = (props: HotelInfoCardInfoProps) => {
  return (
    <div>
      <div className="px-6">
        <h1 className="font-bold text-lg">Ausstattungen und Services</h1>
        <div className="grid grid-cols-2">
        {services.map((service, index) => (
          <p key={index}>{service}</p>
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
        <p>{props.hotel.address.toString()}</p>
      </div>
    </div>
  );
};

export default HotelInfoCardInfo;

import Hotel from "../../models/Hotel";

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
          <p>{service}</p>
        ))}
      </div>

        <h1 className="font-bold text-lg">Standort</h1>
      </div>
      Map
      <div className="p-6 ">
        <h1 className="font-bold text-xs">Anreise/Abreise</h1>
        <p>Anreise: 15:00 Uhr</p>
        <p>Abreise: 12:00 Uhr</p>
        
        <h1 className="font-bold text-xs pt-3">Adresse</h1>
        <p>Holzhude 2, 21029, Hamburg, Deutschland</p>
      </div>
    </div>
  );
};

export default HotelInfoCardInfo;

import { CheckOutlined } from "@ant-design/icons";
import { Button } from "antd";
import Room from "../../../models/Room";
import Rate from "../../../models/Rate";

interface RoomRateProps {
  rate: Rate;
  handleSelectRoom: any;
  selected?: boolean;
}

const RoomRate = (props: RoomRateProps) => {
  const handleSelectRoom = () => {
    props.handleSelectRoom(props.rate);
  };

  let selectedColor = "hover:bg-blue-50";
  if (props.selected) {
    selectedColor = "bg-green-50";
  }

  return (
    <div className={"w-full rounded-md p-2 mt-3 shadow transition-all " + selectedColor}>
      <p className="text-xl">{props.rate.name}</p>
      <div className="flex">
        <div className="w-2/3">
          {props.rate.benefits != undefined &&
            props.rate.benefits.map((benefit, index) => (
              <div className="flex items-center text-xs" key={index}>
                <CheckOutlined />
                <p className="pl-3">{benefit}</p>
              </div>
            ))}
        </div>
        <div className="w-1/3">
          <div className="flex items-center justify-between">
            <p>{props.rate.price} €</p>
            <Button onClick={handleSelectRoom}>Hinzufügen</Button>
          </div>
          <div className="text-xs">Preis pro Nacht: 160 €</div>
        </div>
      </div>
    </div>
  );
};

export default RoomRate;

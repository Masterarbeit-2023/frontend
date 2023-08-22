import { Image } from "antd";
import Hotel from "../../models/Hotel";

interface HotelInfoCardImagesProps {
    hotel: Hotel;
    roomImages: string[];
}

const HotelInfoCardImages = (props: HotelInfoCardImagesProps) => {
    return <div className="grid grid-cols-3 gap-3">
        {props.roomImages.map((image, index) => (
            <Image className="rounded-lg w-full " src={props.roomImages[index]} />
        ))}
    </div>
}

export default HotelInfoCardImages;
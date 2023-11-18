import Extra from "../../../models/Extra";
import ResponseData from "../../../models/ResponseData";
import {useEffect, useState} from "react";
import Hund from "../../../assets/hund.webp";
import Sekt from "../../../assets/Sekt.webp";
import Spätabreise from "../../../assets/Ausschlafen.jpg";
import Frühanreise from "../../../assets/Frühanreise.jpg";
import Mineralwasser from "../../../assets/Mineralwasser.webp";

interface ExtraViewProps {
    extra: Extra;
    selected?: boolean;
    handleExtraSelection: any;
}

const ExtraView = (props: ExtraViewProps) => {
    const API_KEY = "IcND4OlRbmTA23qGFJuxyWZXi6vDnOf48k1ArxkTsdLARynK6mZjyhEj";

    const [image, setImage] = useState();

    const extra = props.extra;

    let image2 = "";
    if(extra.name === "Hund") {
        image2 = Hund;
    }
    if(extra.name === "Spätabreise") {
        image2 = Spätabreise;
    }
    if(extra.name === "Frühanreise") {
        image2 = Frühanreise;
    }
    if(extra.name === "Sekt") {
        image2 = Sekt;
    }
    if(extra.name === "Mineralwasser") {
        image2 = Mineralwasser;
    }

    let selectedColor = "";
    if(props.selected) {
        selectedColor = "bg-blue-50";
    }

    const onClickHandle = () => {
        props.handleExtraSelection(extra);
    }

    const fetchmage = async () => {
        const url = `https://api.pexels.com/v1/search?query=${extra.name}`;

        const response = await fetch(url, {
            headers: {
                Authorization: API_KEY,
            },
        });
        const data: ResponseData = await response.json();
        // @ts-ignore
        setImage(data.photos.map((photo) => photo.src.small)[0]);
    };

    useEffect(() => {
        fetchmage();
    }, []);

    return (
        <div className={"rounded-lg m-6 shadow  px-6 " + selectedColor} onClick={onClickHandle}>
            <div className={"pt-6 pb-3 border-b flex justify-between"}>
                <p>{extra.name}</p>
                <p>{extra.price} €</p>
            </div>
            <div className={"pt-3"}>
                <p className="text-xs text-center">{extra.description}</p>
                <div className={"flex justify-center p-3"}>
                    <img className={" rounded-full w-32 h-32 object-cover"}  src={image2}/>
                </div>
            </div>
        </div>
    );
}

export default ExtraView;
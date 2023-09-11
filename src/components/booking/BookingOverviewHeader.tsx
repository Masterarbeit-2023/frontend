import BookingRoom from "../../models/BookingRoom";
import Extra from "../../models/Extra";
import {useParams} from "react-router-dom";
import dayjs from "dayjs";

interface BookingOverviewHeaderProps {

    guests: number;
    roomsNumber: number;
    selectedRooms: BookingRoom[];
    extras: Extra[];

}

const BookingOverviewHeader = (props: BookingOverviewHeaderProps) => {

    const paramStartDate = useParams()["startDate"];
    const paramEndDate = useParams()["endDate"];

    const startDate = dayjs(paramStartDate, 'YYYY-MM-DD');
    const endDate = dayjs(paramEndDate, 'YYYY-MM-DD');
    const amountOfNights = endDate.diff(startDate, 'day')

    let price = 0;
    props.selectedRooms.forEach((room) =>
        price += room.rate.price
    );
    props.extras.forEach((extra) =>
        price += extra.price
    );

    let guestText = "Gast";
    if (props.guests > 1) {
        guestText = "Gäste";
    }

    let extraText = "Extras";
    if (props.extras.length === 1) {
        extraText = "Extra";
    }
    let nightText = "Nächte";
    if (amountOfNights === 1) {
        nightText = "Nacht";
    }
    return (
        <div className={"fixed bg-blue-100 w-full h-20 z-20 flex"}>
            <div className={"w-1/6 flex items-center"}>
                <a className={"mx-auto"} href={"/"}>The Retreat Hotels</a>
            </div>
            <div className={" w-1/6 p-3 flex items-center"}>
                <h1 className={"text-5xl"}>{props.guests}</h1>
                <p className={"pl-3"}>{guestText}</p>
            </div>
            <div className={"w-1/6 p-3 flex items-center"}>
                <h1 className={"text-5xl"}>{amountOfNights}</h1>
                <p className={"pl-3"}>{nightText}</p>
            </div>
            <div className={"w-1/6 p-3 flex items-center"}>
                <h1 className={"text-5xl"}>{props.roomsNumber}</h1>
                <p className={"pl-3"}>Zimmer</p>
            </div>
            <div className={"w-1/6 p-3 flex items-center"}>
                <h1 className={"text-5xl"}>{props.extras.length}</h1>
                <p className={"pl-3"}>{extraText}</p>
            </div>
            <div className={"w-1/6 p-3 flex items-center"}>
                <h1 className={"w-1/3 text-xs"}>Gesamtpreis in €</h1>
                <p className={"pl-6 text-4xl"}>{price}</p>
            </div>
        </div>
    );
}

export default BookingOverviewHeader;
import {useState} from "react";
import {Button, Steps} from "antd";
import HotelPage from "./HotelPage";
import Container from "../components/Container";
import BookingRoom from "../models/BookingRoom";
import {useParams} from "react-router-dom";
import Room from "../models/Room";
import Rate from "../models/Rate";
import ExtraSelection from "../components/extra/ExtraSelection";
import Extra from "../models/Extra";

const BookingPage = () => {

    const paramRooms = useParams()["rooms"];
    let paramRoomsNumber = 0;
    if (paramRooms != undefined) {
        paramRoomsNumber = +paramRooms;
    }

    const [current, setCurrent] = useState(0);
    const [bookingRooms, setBookingRooms] = useState<BookingRoom[]>(new Array(paramRoomsNumber).fill(new BookingRoom()));
    const [selectedExtra, setSelectedExtras] = useState<Extra[]>([]);

    const handleRoomSelection = (newIndex: number, newRoom: Room, newRate: Rate) => {
        const nextRooms = bookingRooms.map((bookingRoom, index) => {
            if (index === newIndex) {
                return new BookingRoom(-1, newRoom, newRate);
            } else {
                return bookingRoom;
            }
        });
        setBookingRooms(nextRooms);
        next();
    };

    const handleExtraSelection = (newExtra: Extra) => {
        if (selectedExtra.filter((e) => e.id === newExtra.id).length > 0) {
            const nextExtras = selectedExtra.filter((extra) => extra.id !== newExtra.id);
            setSelectedExtras(nextExtras);
        }else {
            const nextExtras = selectedExtra.concat(newExtra);
            setSelectedExtras(nextExtras);
        }
    }

    //console.log(selectedExtra)
    const steps = [
        {
            title: 'Zimmerwahl',
            content: <HotelPage bookingRooms={bookingRooms} handleRoomSelection={handleRoomSelection}/>,
        },
        {
            title: 'Extrawahl',
            content: 'Second-content',
        },
        {
            title: 'Buchungsübersicht',
            content: 'Last-content',
        },
    ];

    const items = steps.map((item) => ({key: item.title, title: item.title}));


    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };

    return (
        <div className="">
            <div className={"fixed bg-black w-full h-20 z-20"}>
            </div>
            <Container>

                <Steps className={"pt-20"} current={current} items={items}/>
                {
                    current === 0 && <HotelPage handleRoomSelection={handleRoomSelection} bookingRooms={bookingRooms}/>
                }
                {
                    current === 1 && <ExtraSelection handleExtraSelection={handleExtraSelection}  selectedExtras={selectedExtra}/>
                }
                <div className={"mt-8 flex justify-between"}>
                    {current > 0 && (
                        <Button onClick={() => prev()}>
                            Zurück
                        </Button>
                    )}
                    {current === 0 && (
                        <div></div>
                    )}
                    {current < steps.length - 1 && (
                        <Button className={""} onClick={() => next()}>
                            Weiter
                        </Button>
                    )}
                    {current === steps.length - 1 && (
                        <Button>
                            Bestellung abschließen
                        </Button>
                    )}
                </div>
            </Container>
        </div>
    )
}

export default BookingPage;
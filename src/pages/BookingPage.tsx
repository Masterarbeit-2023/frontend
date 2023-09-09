import {useState} from "react";
import {Button, Steps} from "antd";
import HotelPage from "./HotelPage";
import Container from "../components/Container";
import BookingRoom from "../models/BookingRoom";
import {useParams} from "react-router-dom";
import Room from "../models/Room";
import Rate from "../models/Rate";

const BookingPage = () => {

    const paramRooms = useParams()["rooms"];
    let paramRoomsNumber = 0;
    if (paramRooms != undefined) {
        paramRoomsNumber = +paramRooms;
    }

    const [current, setCurrent] = useState(0);
    const [bookingRooms, setBookingRooms] = useState<BookingRoom[]>(new Array(paramRoomsNumber).fill(new BookingRoom()));

    const handleRoomSelection = (newIndex: number, newRoom: Room, newRate: Rate) => {
        const nextRooms = bookingRooms.map((bookingRoom, index) => {
            if (index === newIndex) {
                return new BookingRoom(-1, newRoom, newRate);
            } else {
                return bookingRoom;
            }
        });
        setBookingRooms(nextRooms);
    };

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

                <Steps current={current} items={items}/>
                {
                    current === 0 && <HotelPage handleRoomSelection={handleRoomSelection} bookingRooms={bookingRooms}/>
                }
                <div className={"mt-8 flex justify-between"}>
                    {current > 0 && (
                        <Button onClick={() => prev()}>
                            Previous
                        </Button>
                    )}
                    {current === 0 && (
                        <div></div>
                    )}
                    {current < steps.length - 1 && (
                        <Button className={""} onClick={() => next()}>
                            Next
                        </Button>
                    )}
                    {current === steps.length - 1 && (
                        <Button>
                            Done
                        </Button>
                    )}
                </div>
            </Container>
        </div>
    )
}

export default BookingPage;
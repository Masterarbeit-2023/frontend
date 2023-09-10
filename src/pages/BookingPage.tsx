import {useEffect, useState} from "react";
import {Button, Steps} from "antd";
import HotelSelection from "../components/booking/hotel/HotelSelection";
import Container from "../components/Container";
import BookingRoom from "../models/BookingRoom";
import {useParams} from "react-router-dom";
import Room from "../models/Room";
import Rate from "../models/Rate";
import ExtraSelection from "../components/booking/extra/ExtraSelection";
import Extra from "../models/Extra";
import BookingOverview from "../components/booking/BookingOverview";
import BookingOverviewHeader from "../components/booking/BookingOverviewHeader";

const BookingPage = () => {
        const paramRooms = useParams()["rooms"];
    let paramRoomsNumber = 0;
    if (paramRooms != undefined) {
        paramRoomsNumber = +paramRooms;
    }

    const paramAdults = useParams()["adults"];
    const paramChildren = useParams()["children"];

    const [current, setCurrent] = useState(0);
    const [bookingRooms, setBookingRooms] = useState<BookingRoom[]>(new Array(paramRoomsNumber).fill(new BookingRoom()));
    const [selectedExtra, setSelectedExtras] = useState<Extra[]>([]);
    const [numberGuests, setNumberGuests] = useState(0);

    useEffect(() => {
        let paramGuestsNumber = 0;
        if (paramAdults != undefined) {
            paramGuestsNumber += parseInt(paramAdults);
        }

        if (paramChildren != undefined) {
            paramGuestsNumber += parseInt(paramChildren);
        }

        setNumberGuests(paramGuestsNumber)

    }, [paramChildren, paramRoomsNumber]);

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
            content: <HotelSelection bookingRooms={bookingRooms} handleRoomSelection={handleRoomSelection}/>,
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
            <BookingOverviewHeader  guests={numberGuests} roomsNumber={paramRoomsNumber} selectedRooms={bookingRooms} extras={selectedExtra}/>
            <Container>

                <Steps className={"pt-20"} current={current} items={items}/>
                {
                    current === 0 && <HotelSelection handleRoomSelection={handleRoomSelection} bookingRooms={bookingRooms}/>
                }
                {
                    current === 1 && <ExtraSelection handleExtraSelection={handleExtraSelection}  selectedExtras={selectedExtra}/>
                }
                {
                    current === 2 && <BookingOverview />
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
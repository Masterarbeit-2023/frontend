import {useEffect, useState} from "react";
import {Button, message, Steps} from "antd";
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
import Booking from "../models/Booking";
import BookingRoomDto from "../dtos/BookingRoomDto";

const BookingPage = () => {
    const paramRooms = useParams()["rooms"];
    let paramRoomsNumber = 0;
    if (paramRooms != undefined) {
        paramRoomsNumber = +paramRooms;
    }

    const paramAdults = useParams()["adults"];
    const paramChildren = useParams()["children"];
    const paramStartDate = useParams()["startDate"];
    const paramEndDate = useParams()["endDate"];

    const [current, setCurrent] = useState(0);
    const [bookingRooms, setBookingRooms] = useState<BookingRoom[]>(new Array(paramRoomsNumber).fill(new BookingRoom()));
    const [selectedExtra, setSelectedExtras] = useState<Extra[]>([]);
    const [numberGuests, setNumberGuests] = useState(0);
    const [bookingSuccessful, setBookingSuccessful] = useState(false);

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
        } else {
            const nextExtras = selectedExtra.concat(newExtra);
            setSelectedExtras(nextExtras);
        }
    }

    async function makeOrder() {
        const url = `http://localhost:8080/booking`;
        let startDate = "";
        if (paramStartDate !== undefined) {
            startDate = paramStartDate;
        }
        let endDate = "";
        if (paramEndDate !== undefined) {
            endDate = paramEndDate;
        }
        let adults = 0;
        if (paramAdults !== undefined) {
            adults = +paramAdults;
        }
        let children = 0;
        if (paramChildren !== undefined) {
            children = +paramChildren;
        }
        const bookingRoomDtos = bookingRooms.map((bookingRoom) => {
                return new BookingRoomDto(bookingRoom.room.id, bookingRoom.rate.id)
            }
        );
        const booking = new Booking(
            -1,
            startDate,
            endDate,
            adults,
            children,
            selectedExtra,
            bookingRoomDtos
        );
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Request-Method': 'POST',
                'Access-Control-Request-Headers': 'Content-Type'
            },
            body: JSON.stringify(booking)
        };
        let data;
        const response = await fetch(url, requestOptions)
            .then(response => {
                data = response.json();
                setBookingSuccessful(true);
            })
            .catch(error => {
                message.error("Buchung konnte nicht durchgeführt werden!");

            });
        return data;
    }


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

            <BookingOverviewHeader guests={numberGuests} roomsNumber={paramRoomsNumber} selectedRooms={bookingRooms}
                                   extras={selectedExtra}/>
            <Container>

                <Steps className={"pt-20"} current={current} items={items}/>
                {
                    current === 0 &&
                    <HotelSelection handleRoomSelection={handleRoomSelection} bookingRooms={bookingRooms}/>
                }
                {
                    current === 1 &&
                    <ExtraSelection handleExtraSelection={handleExtraSelection} selectedExtras={selectedExtra}/>
                }
                {
                    current === 2 && <BookingOverview bookingSuccessful={bookingSuccessful}/>
                }
                <div className={"mt-8 flex justify-between"}>
                    {current > 0 && (
                        <Button hidden={bookingSuccessful} onClick={() => prev()}>
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
                        <Button hidden={bookingSuccessful} onClick={makeOrder}>
                            Bestellung abschließen
                        </Button>
                    )}
                </div>
            </Container>
        </div>
    )
}

export default BookingPage;
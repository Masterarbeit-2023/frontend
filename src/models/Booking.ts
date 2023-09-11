import Extra from "./Extra";
import BookingRoom from "./BookingRoom";
import BookingRoomDto from "../dtos/BookingRoomDto";

class Booking {
    id: number;
    startDate: string;
    endDate: string;
    adults: number;
    children: number;
    extras: Extra[];
    rooms: BookingRoomDto[];


    constructor(id: number, startDate: string, endDate: string, adults: number, children: number, extras: Extra[], rooms: BookingRoomDto[]) {
        this.id = id;
        this.startDate = startDate;
        this.endDate = endDate;
        this.adults = adults;
        this.children = children;
        this.extras = extras;
        this.rooms = rooms;
    }
}

export default Booking;
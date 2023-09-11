
class BookingRoomDto {
    room: number;
    rate: number;


    constructor(room: number, rate: number) {
        this.room = room;
        this.rate = rate;
    }
}

export default BookingRoomDto;
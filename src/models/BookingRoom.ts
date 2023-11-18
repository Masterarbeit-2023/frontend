import Room from "./Room";
import Rate from "./Rate";

class BookingRoom {
    id: number;
    room: Room;
    rate: Rate;
    constructor(cid?: number, croom?: Room, crate?: Rate) {
        this.id = cid ?? -1;
        this.room = croom ?? new Room(-1, "", [], [], 0, 0);
        this.rate = crate ?? new Rate(-1,"", false, [], 0);
    }

}

export default BookingRoom;
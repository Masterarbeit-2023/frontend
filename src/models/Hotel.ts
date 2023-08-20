import Address from "./Address";
import Rating from "./Rating";

class Hotel {
    name: string;
    checkIn: string;
    checkOut: string;
    address: Address;
    rating: Rating;


    constructor(cname: string, ccheckIn: string, ccheckOut: string, caddress: Address, crating: Rating) {
        this.name = cname;
        this.checkIn = ccheckIn;
        this.checkOut = ccheckOut;
        this.address = caddress;
        this.rating = crating;
    }
}

export default Hotel;
import Address from "./Address";
import Rating from "./Rating";

class Hotel {
    name: string;
    checkIn: string;
    checkOut: string;
    address: Address;
    rating: Rating;
    userRatings: Rating[];
    lowestPrice: number;
    distanceToCentrum: number;

    constructor(cname: string, ccheckIn: string, ccheckOut: string, caddress: Address, crating: Rating, cuserRatings: Rating[], clowestPrice: number, cdistanceToCentrum:number) {
        this.name = cname;
        this.checkIn = ccheckIn;
        this.checkOut = ccheckOut;
        this.address = caddress;
        this.rating = crating;
        this.userRatings = cuserRatings;
        this.lowestPrice = clowestPrice;
        this.distanceToCentrum = cdistanceToCentrum;
    }
}

export default Hotel;
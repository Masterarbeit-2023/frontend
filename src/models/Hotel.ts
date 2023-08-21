import Address from "./Address";
import Rating from "./Rating";

class Hotel {
    id: number;
    name: string;
    checkIn: string;
    checkOut: string;
    address: Address;
    rating: Rating;
    userRatings: Rating[];
    lowestPrice: number;
    distanceToCentrum: number;    
    services: string[];
    facilities: string[];

    constructor(cid: number, cname: string, ccheckIn: string, ccheckOut: string, caddress: Address, crating: Rating, cuserRatings: Rating[], clowestPrice: number, cdistanceToCentrum:number, cservices: string[], cfacilities: string[]) {
        this.id = cid;
        this.name = cname;
        this.checkIn = ccheckIn;
        this.checkOut = ccheckOut;
        this.address = caddress;
        this.rating = crating;
        this.userRatings = cuserRatings;
        this.lowestPrice = clowestPrice;
        this.distanceToCentrum = cdistanceToCentrum;
        this.services = cservices;
        this.facilities = cfacilities;
    }
}

export default Hotel;
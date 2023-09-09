import Rate from "./Rate";
import Facility from "./Facility";

class Room {
    name: string;
    facilities: Facility[];
    rates: Rate[];
    numberOfPersons: number;
    roomSizeInSqm: number;

    constructor(cname: string, cfacilities: Facility[], crates: Rate[], cnumberOfPersons: number, croomSizeInSqm: number) {
        this.name = cname;
        this.facilities = cfacilities;
        this.rates = crates;
        this.numberOfPersons = cnumberOfPersons;
        this.roomSizeInSqm = croomSizeInSqm;
    }
}

export default Room;
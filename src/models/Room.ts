import Rate from "./Rate";

class Room {
    name: string;
    facilities: string[];
    rates: Rate[];

    constructor(cname: string, cfacilities: string[], crates: Rate[]) {
        this.name = cname;
        this.facilities = cfacilities;
        this.rates = crates;
    }
}

export default Room;
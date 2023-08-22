class Room {
    name: string;
    facilities: string[];

    constructor(cname: string, cfacilities: string[]) {
        this.name = cname;
        this.facilities = cfacilities;
    }
}

export default Room;
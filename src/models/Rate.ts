class Rate {
    id: number;
    name: string;
    member: boolean;
    benefits: string[];
    price: number;


    constructor(cid: number, cname: string, cmember: boolean, cbenefits: string[], cprice: number) {
        this.id = cid;
        this.name = cname;
        this.member = cmember;
        this.benefits = cbenefits;
        this.price = cprice;
    }
}

export default Rate;
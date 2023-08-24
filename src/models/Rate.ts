class Rate {
    name: string;
    member: boolean;
    benefits: string[];
    price: number;


    constructor(cname: string, cmember: boolean, cbenefits: string[], cprice: number) {
        this.name = cname;
        this.member = cmember;
        this.benefits = cbenefits;
        this.price = cprice;
    }
}

export default Rate;
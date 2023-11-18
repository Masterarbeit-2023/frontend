class Extra {
    id: number;
    name: string;
    description: string;
    price: number;
    perDay: boolean;
    perVisit: boolean;
    perPerson: boolean;
    perPiece: boolean;


    constructor(id: number, name: string, description: string, price: number, perDay: boolean, perVisit: boolean, perPerson: boolean, perPiece: boolean) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.perDay = perDay;
        this.perVisit = perVisit;
        this.perPerson = perPerson;
        this.perPiece = perPiece;
    }
}

export default Extra;
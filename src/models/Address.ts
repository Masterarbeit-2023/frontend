class Address {
    street: string;
    houseNumber: number;
    postalCode: string;
    city: string;
    country: string;

    constructor(cstreet: string, chouseNumber: number, cpostalCode: string, ccity: string, ccountry: string) {
        this.street = cstreet;
        this.houseNumber = chouseNumber;
        this.postalCode = cpostalCode;
        this.city = ccity;
        this.country = ccountry;
    }
    /**
     * name
     */
    public toString() {
        return "" + this.street + " " + this.houseNumber + ", " + this.postalCode + " " + this.city + ", " + this.country;
    } 
}

export default Address;
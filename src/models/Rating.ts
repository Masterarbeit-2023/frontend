class Rating {
  score: number;
  location: number;
  room: number;
  service: number;
  pricePerformanceRatio: number;
  comfort: number;
  equipment: number;
  building: number;
  breakfast: number;
  food: number;
  description: string;
  name: string;
  dateRating: string;

  constructor(
    cscore: number,
    clocation: number,
    croom: number,
    cservice: number,
    cpricePerformanceRatio: number,
    ccomfort: number,
    cequipment: number,
    cbuilding: number,
    cbreakfast: number,
    cfood: number,
    cdescription: string,
    cname: string,
    cdateRating: string
  ) {
    this.score = cscore;
    this.location = clocation;
    this.room = croom;
    this.service = cservice;
    this.pricePerformanceRatio = cpricePerformanceRatio;
    this.comfort = ccomfort;
    this.equipment = cequipment;
    this.building = cbuilding;
    this.breakfast = cbreakfast;
    this.food = cfood;
    this.description = cdescription;
    this.name = cname;
    this.dateRating = cdateRating
  }
}

export default Rating;

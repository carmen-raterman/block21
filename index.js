class Car {
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    getDescription () {
        console.log(`This is a ${this.make} ${this.model} ${this.year}`);
    }
}

class ElectricCar extends Car {
    constructor(make, model, year, range){
        super(make, model, year)
        this.range = range;
    }
    getNewDescription() {
        console.log(`This is a ${this.make} ${this.model} ${this.year} with a range of ${this.range}`);
    }
}

const tesla = new ElectricCar("Tesla", "Model S", 2019, 300);
console.log(tesla.getNewDescription());
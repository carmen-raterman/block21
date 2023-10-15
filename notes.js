//creating a class, a class is something that describes an object and is a blueprint
//we are defining a class
class Animal {
    constructor(name, species){
        this.name = name;
        this.species = species;

    }
    //make sound is a method of this blueprint, so when you do "." then it should show up
    makeSound(){
        console.log("Animal Sound");
    }
}

//here we instantiate an object
let animal = new Animal("Dog", "Mammal");
let animal2 = new Animal("Cat", "Mammal");
let caterpillar = new Animal("Caterpillar", "Insect");
let falcon = new Animal("Falcon", "Bird");

// console.log(typeof caterpillar);
// caterpillar.makeSound(); 

class Vehicle {
    constructor(make, model){
        this.make = make;
        this.model = model;
    }
    start(){
        console.log(`${this.make} ${this.model} is starting`);
    }
}

//Car can inherit the methods as well as the make and type
class Car extends Vehicle{
    constructor(make, model, year){
        //refers to vehicle and says we are adding something else and reference whatever is preexisting
        super(make, model)
        this.year = year;
    }
    drive(){
        console.log(`${this.make} ${this.model} is driving`);
    }
}

const ford = new Car("Ford", "F150", 2019);
console.log(ford.drive());


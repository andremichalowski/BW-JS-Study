/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday
/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:

class Airplane {
    constructor(attributes) {
        this.name = attributes.name;
        this.isFlying = false;
    }
    takeOff() {
        this.isFlying = true;
    }
    land() {
        this.isFlying = false;
    }
}

    //Test Airplane
    const jumboJetOne = new Airplane({
        name: 'Boeing 747',
    })

    console.log(jumboJetOne);
    console.log(jumboJetOne.takeOff);

    
  /*
  // 👇 COMPLETE YOUR WORK BELOW 👇
  // 👇 COMPLETE YOUR WORK BELOW 👇
  // 👇 COMPLETE YOUR WORK BELOW 👇
  */
  
  /*
    TASK 1
      - Write a Person Constructor that initializes `name` and `age` from arguments.
      - All instances of Person should initialize with an empty `stomach` array.
      - Give instances of Person the ability to `.eat("someFood")`:
          + When eating an edible, it should be pushed into the `stomach`.
          + The `eat` method should have no effect if there are 10 items in the `stomach`.
      - Give instances of Person the ability to `.poop()`:
          + When an instance poops, its `stomach` should empty.
      - Give instances of Person a method `.toString()`:
          + It should return a string with `name` and `age`. Example: "Mary, 50"
  */
  
    class Person {
        constructor(attributes) {
         this.name = attributes.name;
         this.age = attributes.age;
         this.stomach = [];
        }
        eat(someFood) {
            if (this.stomach.length < 9 && this.stomach.length >= 0) {
                this.stomach.push(someFood);
                console.log(`The stomach just consumed 1 unit of food, "${this.stomach}" and ${10 - this.stomach.length} units remain.`);
            } else {
                return `The stomach is full. Time to poop.`;
            }
        }
        poop() {
            this.stomach = [];
            console.log(`${this.name} just pooped and has 10 stomach units available.`);
        }
        toString() {
            return `${this.name}, ${this.age}`;
        }
    };

    // Test Person:
      const poopingCharacter = new Person({
        name: 'Bezelbub',
        age: '750',
      });

      console.log(poopingCharacter.eat('bread'));
      console.log(poopingCharacter.eat('bread'));
      console.log(poopingCharacter.stomach);
      console.log(poopingCharacter.poop());
      console.log(poopingCharacter.eat('raisin'));
      console.log(poopingCharacter.eat('brocoli'));
      console.log(poopingCharacter.eat('brocoli'));
      console.log(poopingCharacter.eat('brocoli'));
      console.log(poopingCharacter.eat('banana'));
      console.log(poopingCharacter.eat('oatmeal'));
      console.log(poopingCharacter.eat('candy'));
      console.log(poopingCharacter.eat('sandwich'));
      console.log(poopingCharacter.eat('turkey'));
      console.log(poopingCharacter.eat('brocoli'));
      console.log(poopingCharacter.poop());
      console.log(poopingCharacter.toString());
  
  
//   /*
//     TASK 2
//       - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
//       - All instances built with Car:
//           + should initialize with an `tank` at 0
//           + should initialize with an `odometer` at 0
//       - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
//       - Give cars ability to `.drive(distance)`. The distance driven:
//           + Should cause the `odometer` to go up.
//           + Should cause the the `tank` to go down taking `milesPerGallon` into account.
//       - A car which runs out of `fuel` while driving can't drive any more distance:
//           + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
//   */
  
    class Car {
        constructor(attributes) {
         this.model = attributes.model;
         this.milesPerGallon = attributes.milesPerGallon;
         this.tank = 0;
         this.odometer = 0;
        }
        fill(gallons) {
         this.tank += gallons;
         console.log(`This car's tank was just filled with ${gallons} more gallons.`);
        }
        drive(distance) {
         let maxDistance = this.tank * this.milesPerGallon;
         if (distance > maxDistance) {
            this.odometer += maxDistance;
            this.tank = 0;
            console.log(`This car just drove ${maxDistance} miles and ran out of gas.`);
         } else {
            this.odometer += distance;
            this.tank -= distance / this.milesPerGallon;
            console.log(`I just traveled ${distance} miles!`);
         }
        }
    };

    // Test Person:
    const benz = new Car({
     model: 'AMG',
     milesPerGallon: '14',
    });

    console.log(benz.fill(20));
    console.log(benz.drive(200));
    console.log(benz.drive(40));
    console.log(benz.tank);
    console.log(benz);
    console.log(benz.drive(50));
  
 
  
  
//   // /*
//   //   TASK 3
//   //     - Write a Baby constructor subclassing Person.
//   //     - Besides `name`, Baby takes a second argument to initialize `favoriteToy`.
//   //     - Besides the methods on Person.prototype, babies have the ability to `.play()`:
//   //         + Should return a string "Playing with x", x being the favorite toy.
//   // */

    class Baby extends Person {
        constructor(name, age, favoriteToy){
            super(name, age); //Person.call(this, name);
            //this.name = name;
            this.favoriteToy = favoriteToy;
        }
        play(favoriteToy){
            return `${this.name} is playing with ${favoriteToy}`;
        }
    };

    const Stewie = new Baby ({
        name: 'Stewie',
        age: '1',
    })

    console.log(Stewie.play('a rattle.'));
    console.log(Stewie.age);

   

  /*
    TASK 4
    
  
    In your own words explain the four principles for the "this" keyword below:
    1. Window/Global/Default Object Binding: When in the global scope, the value of "this" will be the window/console Object;
    2. Implicit Binding: Whenever a function is called by a preceding dot, the object before that dot is this.
    3. New Binding: Whenever a constructor function is used, "this" refers to the specific instance of the object that is created and retured by the constructor function.
    4. Explicit Binding: Whenever Javascript's call or apply method is used this is explicityly defined.

    // // */
  
  ///////// END OF CHALLENGE /////////
  ///////// END OF CHALLENGE /////////
  ///////// END OF CHALLENGE /////////
  if (typeof exports !== "undefined") {
    module.exports = module.exports || {};
    if (Airplane) {
      module.exports.Airplane = Airplane;
    }
    if (Person) {
      module.exports.Person = Person;
    }
    if (Car) {
      module.exports.Car = Car;
    }
    if (Baby) {
      module.exports.Baby = Baby;
    }
  }
  
// 2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.



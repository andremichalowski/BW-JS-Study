https://codesandbox.io/s/js-exercise-prototype-1pjzm


/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
  this.name = name;
  this.isFlying = false;
}
Airplane.prototype.takeOff = function () {
  this.isFlying = true;
};
Airplane.prototype.land = function () {
  this.isFlying = false;
};

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

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];
}

Person.prototype.eat = function(someFood) {
  if (this.stomach.length < 10) {
  this.stomach.push(someFood);
  console.log(`The stomach just consumed 1 unit of food and ${(10 - this.stomach.length)} units remain.`);
  } else {
    return (`The stomach is full.`)
  }
}

Person.prototype.poop = function() {
  this.stomach = [];
  console.log(`This person just pooped and has 10 stomach units available.`)
}

Person.prototype.toString = function() {
  return `${this.name}, ${this.age}`;
}

const poopingCharacter = new Person(Bezelbub, 750);

console.log(poopingCharacter.eat('edible', 'arrangement'));



/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

function Car(model, milesPerGallon) {
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.tank = 0;
  this.odometer = 0;
};

Car.prototype.fill = function(gallons) {
  this.tank += gallons;
  console.log(`This car's tank was just filled with ${gallons} more gallons.`)
};

Car.prototype.drive = function(distance) {
  let maxDistance = this.tank * this.milesPerGallon;
  if (distance > maxDistance) {
    this.odometer += maxDistance;
    this.tank = 0;
    console.log(`This car just drove ${maxDistance} miles and ran out of gas.`)
  } else {
    this.odometer += distance;
    this.tank -= distance/this.milesPerGallon;
    console.log (`I just traveled ${distance} miles!"`)
  }
};

// /*
//   TASK 3
//     - Write a Baby constructor subclassing Person.
//     - Besides `name`, Baby takes a second argument to initialize `favoriteToy`.
//     - Besides the methods on Person.prototype, babies have the ability to `.play()`:
//         + Should return a string "Playing with x", x being the favorite toy.
// */
function Baby() {
  // Inherit parent attributes
  Person.call(this, attrs);
  this.favoriteToy = attrs.favoriteToy;
}
// Inherit parent prototypes
Baby.prototype = Object.create(Person.prototype);
Baby.prototype.play = function(favoriteToy) {
  console.log(`Playing with ${favoriteToy}`);
}

// /* 
//   TASK 4

//   In your own words explain the four principles for the "this" keyword below:
//   1. Window/Global/Default Object Binding: When in the global scope, the value of "this" will be the window/console Object;
//   2. Implicit Binding: Whenever a function is called by a preceding dot, the object before that dot is this.
//   3. New Binding: Whenever a constructor function is used, "this" refers to the specific instance of the object that is created and retured by the constructor function.
//   4. Explicit Binding: Whenever Javascript's call or apply method is used this is explicityly defined.
// */


// ///////// END OF CHALLENGE /////////
// ///////// END OF CHALLENGE /////////
// ///////// END OF CHALLENGE /////////
if (typeof exports !== 'undefined') {
  module.exports = module.exports || {}
  if (Airplane) { module.exports.Airplane = Airplane }
  if (Person) { module.exports.Person = Person }
  if (Car) { module.exports.Car = Car }
  if (Baby) { module.exports.Baby = Baby }
}

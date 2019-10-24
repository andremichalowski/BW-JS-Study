//====== Building Pseudoclasses ======//
// Constructor function builds objects
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.odometer = 0;
  this.someValue = ['some', 'values'];
  // We can attach methods!
  // Better to use a prototype for methods
  this.drive = function() {
    this.odometer += 10;
    console.log(`The ${this.make} ${this.model} drove 10 miles.`);
  }
}

//====== New Binding ======//
// "this" refers to the new object instance being created

const c63 = new Car('Mercedes Benz', 'C63', 2014);

c63.drive();
c63.drive();
c63.drive();

console.log(c63);


// Niklas
function Audi(name, topSpeed, weight, color) {
  this.name = name;
  this.topSpeed = topSpeed;
  this.weight = weight;
  this.color = color;
}
const rs6 = new Audi('RS6', 300, 2400, 'black')
console.log(rs6)

// Emma
function Dog(name, breed, age, sweet) {
  this.name = name;
  this.breed = breed;
  this.age = age;
  this.sweet = 0;
  this.eat = function () {
    this.sweet += 1;
    console.log(`${this.name} has eaten another sweet!`)
  }
}

const sonny = new Dog("Sonny", "RottieX Staffie", "8")

sonny.eat();
sonny.eat();
sonny.eat();

console.log(sonny);

// Prototypes
function Parent({ name, age, location, phrase}) {
  this.name = name;
  this.age = age;
  this.location = location;
  this.phrase = phrase;
}

Parent.prototype.speak = function() {
  return `${this.name} says ${this.phrase}`;
}

const fred = new Parent({
  age: 35,
  name: 'Fred',
  location: 'Bedrock',
  phrase: 'Yabba dabba do!'
});

const wilma = new Parent({
  age: 25,
  name: 'Wilma',
  location: 'Bedrock',
  phrase: 'Yabba dabba do!'
});

console.log(fred.speak());
console.log(wilma.speak());


// Alison
function DogWalk(details) {
  this.name = details.name;
  this.description = details.description;
  this.compass = details.compass;
  this.address = details.address;
  this.distanceFromCity = details.distanceFromCity;
  this.carPark = details.carPark;
  this.carParkCharge = details.carParkCharge;
  this.lengthOfWalk = details.lengthOfWalk;
  this.lead = details.lead;
  this.starRating = details.starRating;
  this.water = details.water;
  this.fenced = details.fenced;
}
DogWalk.prototype.summary = function () {
  console.log(`This dogwalk is a ${ this.starRating } star rated walk known locally as ${ this.name }.Description: ${ this.description }.It is situated aproximately ${ this.distanceFromCity } ${ this.compass } of Cambridge.Carparking facilities: ${ this.carPark } ${ this.carParkCharge }`);
};
const Beechwoods = new DogWalk({
  name: "The Beechwoods",
  description: "A mature wood of Beechtrees on the brow of a chalk hill",
  compass: "south, south west",
  address: "null",
  distanceFromCity: "3 miles",
  carPark: "yes",
  carParkCharge: "free",
  lengthOfWalk: "1 km",
  lead: "under close control",
  starRating: "4",
  water: "no",
  fenced: "partially",
})
console.log(Beechwoods);
console.log(Beechwoods.summary());

//====== Pseudoclassical Inheritance ======//
// Step 1. Create Constructor
function Child(childAttributes) {
  // Step 2. Add Explicit Binding
  Parent.call(this, childAttributes);
  this.toy = childAttributes.toy;
}

// Step 3. Connect Child to Parent
Child.prototype = Object.create(Parent.prototype);

// Step 4. Attach Child Methods!
Child.prototype.play = function () {
  return `${this.name} plays with her ${this.toy}.`;
}

const pebbles = new Child({
  age: 2,
  name: 'Pebbles',
  location: 'Bedrock',
  phrase: 'Yabba dabba doozie!',
  toy: 'Rock Doll'
});

console.log(pebbles.speak());
console.log(pebbles.play());


// Rodrigo & Emma
function GrandChild(params) {
  Child.call(this, params);
  this.pet = params.pet;
}

GrandChild.prototype = Object.create(Child.prototype);

GrandChild.prototype.doSomething = function (params) {
  return "something";
}

const george = new GrandChild({
  name: "George",
  age: 1,
  location: "Norwich",
  phrase: "Googoo Gaagaa",
  toy: "Rattle",
  pet: "Dog"
});

console.log(george);
console.log(george.doSomething());
console.log(george.play());
console.log(george.speak());



// Destructuring
const { name, phrase } = george;

const [one, two, three] = ['first', 'second', 'third'];

console.log(name, phrase);
console.log(one, two, three);

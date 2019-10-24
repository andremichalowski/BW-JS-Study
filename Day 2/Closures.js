// // // ==== Challenge 1: Write your own closure ====
// // // Write a closure of your own creation.
// // // Keep it simple! Remember a closure is just a function
// // // that manipulates variables defined in the outer scope.
// // // The outer scope can be a parent function, or the top level of the script.

// // Closure 1: //??? is this really a closure since it's an arrow function

// let shoesclosures = ['Adidas', 'Puma', 'Nike', 'Reebok', 'Asics'];
// const startsWithA = shoesclosures.filter((shoe) => let letter = ['a']; shoe.startsWith(letter);

// console.log(startsWithA); ///??? What's going on that this wont work

// // Closure 2:
function login() {
  let username = 'Andre';
  function displayUser() {
    console.log("Thanks for logging in " + username + "!" + " would you like to see your daily reports!");
  }
  return displayUser();
}
login();

// // Closure 3:

// let pushbox = [];
// function uselesspush() {      ///???Can we do a review of examples of all the kind of functions that are annonymous, or declarations, or expressions.
//   let name = 'Penguin';
//   function nameToArray(name) {
//     pushbox.push(name);
//   }
//   console.log(pushbox);
//   return (`Why's is there a ${this.name} in the array`);
// }
// uselesspush();
// // Can you help me edit this function.



///??? Stretch Problems ???///
//************** */
// /* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// // ==== Challenge 2: Implement a "counter maker" function ====
// const counterMaker = () => {
//   // IMPLEMENTATION OF counterMaker:
//   // 1- Declare a `count` variable with a value of 0. We will be mutating it, so declare it using `let`!
//   // 2- Declare a function `counter`. It should increment and return `count`.
//   //      NOTE: This `counter` function, being nested inside `counterMaker`,
//   //      "closes over" the `count` variable. It can "see" it in the parent scope!
//   // 3- Return the `counter` function.
// };
// // Example usage: const myCounter = counterMaker();
// // myCounter(); // 1
// // myCounter(); // 2

// // ==== Challenge 3: Make `counterMaker` more sophisticated ====
// // It should have a `limit` parameter. Any counters we make with `counterMaker`
// // will refuse to go over the limit, and start back at 1.

// // ==== Challenge 4: Create a counter function with an object that can increment and decrement ====
// const counterFactory = () => {
//   // Return an object that has two methods called `increment` and `decrement`.
//   // `increment` should increment a counter variable in closure scope and return it.
//   // `decrement` should decrement the counter variable and return it.
// };
// //--------------------------------------------------------------------------------------------------//

// const counter = () => {
//   // Return a function that when invoked increments and returns a counter variable.	  // Return a function that when invoked increments and returns a counter variable.
//   let counter = 0;
//   const innerFunction = () => {
//     counter = counter + 1;
//     return counter;
//   }
//   return innerFunction;
// };	};
// const newCounter = counter();
// console.log(newCounter());
// console.log(newCounter());
// Example usage: const newCounter = counter();	
// // Example usage: const newCounter = counter();
// newCounter(); // 1	// newCounter(); // 1
// newCounter(); // 2	// newCounter(); // 2


// // ==== Challenge 3: Create a counter function with an object that can increment and decrement ====	// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
// const counterFactory = () => {	let counterFactory = () => {
//   // used to store multiple counters without effecting the previous assigned counter
//   let counter = 0;
//   function changeBy(val) {
//     counter += val;
//   }
//   // Return an object that has two methods called `increment` and `decrement`.	  // Return an object that has two methods called `increment` and `decrement`.
//   // `increment` should increment a counter variable in closure scope and return it.	  return {
//   // `decrement` should decrement the counter variable and return it.	    // `increment` should increment a counter variable in closure scope and return it.
//     increment: () => {
//       changeBy(1);
//     },
//     // `decrement` should decrement the counter variable and return it.
//     decrement: () => {
//       changeBy(-1);
//     },
//     value: () => {
//       return counter;
//     }
//   }
// };	};
// let counter1 = counterFactory();
// let counter2 = counterFactory();
// console.log(counter1.value()); // logs 0
// counter1.increment();
// counter1.increment();
// console.log(counter1.value()); // log 2
// counter1.decrement();
// console.log(counter1.value()); // logs1
// console.log(counter2.value()); // logs 0. Not affected by other counter. Have multiple counters 

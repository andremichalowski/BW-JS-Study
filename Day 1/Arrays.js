// To help us use arrays with real world problems we are going to simulate a used car dealer that has 50 cars in their inventory.

// The car dealer has all of their inventory housed in the array seen below.  Scroll down past the data to find out how you can help the car dealer.

let inventory = [
    { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
    { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
    { id: 3, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
    { id: 4, car_make: "Honda", car_model: "Accord", car_year: 1983 },
    { id: 5, car_make: "Mitsubishi", car_model: "Galant", car_year: 1990 },
    { id: 6, car_make: "Honda", car_model: "Accord", car_year: 1995 },
    { id: 7, car_make: "Smart", car_model: "Fortwo", car_year: 2009 },
    { id: 8, car_make: "Audi", car_model: "4000CS Quattro", car_year: 1987 },
    { id: 9, car_make: "Ford", car_model: "Windstar", car_year: 1996 },
  ];
  
  // Example 1 for loop:
  
  // const arr = ['a', 'b', 'c', 'd'];
  // for (let i = 0; i < arr.length; i++) {
  //     console.log(arr[i]);
  // }
  // 'a' 'b' 'c' 'd'
  
  // Example 2 for loop:
  
  // const arr = [12, 13, 14, 15];
  // const evens = [];
  // for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] % 2 === 0) { evens.push(arr[i]); }
  // }
  // console.log(evens);
  // [12, 14]
  
  
  //1. Reviewing loops and the examples given to you. 
  // Standard "for loop array functions" in this case follow the following patter:

        //A. Define the variable that you want to call (the function that you want to perform); Use arrow function and and open parameter container unless you know what variable you need. 
                //??? what are the parameters that ALEX outlined... where is this in msn docs?
        //B. For loop.
        //C. Create a secondary array to store the results of the "for-looped" functions that you place later.
        //D. Use "if" statements or create new variables (to be pushed to the mini-array) with methods on them.
        //F. Console log the result. Call the variable.

  
  // ??? Ask help on all of these.
  //*******************************************************************************************************************************//
  // ==== Challenge 1 === 
  // Log a car's information using it's ID number. (specifically year make and model)
  
  //------------------------------------------------------------//
  const searchId = (vehicleId) => {
    for (let i = 0; i < inventory.length; i++) { // for loop
      if (inventory[i].id === vehicleId) { // if the inventory current number === input car number 
        console.log(`Car ${inventory[i].id} is a ${inventory[i]['car_year']} ${inventory[i]['car_make']} ${inventory[i]['car_model']}`)
        // then print the car name, make, and model (object keys) results (object values)
      };
    }
  }
  searchId(5); //call for 5. Prints "Car 5 is a 1990 Mitsubishi Galant"
  //------------------------------------------------------------//
  
  
  //*******************************************************************************************************************************//
  // ==== Challenge 2 ====
  // Log the *LAST* cars information. (specifically make and model)  
  //------------------------------------------------------------//
  const lastVechicle = () => { //A.B. Define variable and make arrow fxn
    let inventoryLength = inventory.length; //define a variable for for loop
    for (let i = 0; i < inventoryLength; i++) { // B. For loop
      let item = inventory[i]; // abbreviation // C. (NO C HERE)
      if((i + 1) == (inventoryLength)) { // D. if statment to check if last iteration of the array
        console.log(`${item['car_make']} ${item['car_model']}`); // E. New statements // F. log
      }
    }
  
  }
  lastVechicle(); // G. Call
  //------------------------------------------------------------//
  

  //*******************************************************************************************************************************//
  // ==== Challenge 3 ====
  // Sort all the car model names into alphabetical order.
    //1. Input the car models into an array
    //2. Alphabetically sort this array (Use .sort()!)
  //------------------------------------------------------------//
  const carModelsSorted = () => { // A. B. 
    let carModels = []; // C. Array for sorted models
    for (let i=0; i < inventory.length; i++) { // D. for loop
      //create new new space to store generic values
      let models = inventory[i]['car_model']; // E. New statements // (inventory models listed)
      carModels.push(models); // E. // (models pushed to array)
      }
      console.log(carModels.sort()); // F. // (console log models // .sort fxn added
  }
  
  carModelsSorted(); //G. Call
  //------------------------------------------------------------//
  

  //*******************************************************************************************************************************//
  // ==== Challenge 4 ====
  // Create a new array from containing only the car years.
  //------------------------------------------------------------//
  const carYearsList = () => { // A. B.
    let carYears = []; // C. Array for sorted years
    for (let i = 0; i < inventory.length; i++) { // B. 
     let years = inventory[i][`car_year`]; // D. variable which is inventory, car years, at I (looped)
     carYears.push(years); // D. populating caryears with years
    }
    console.log(carYears); // E. 
  }
  
  carYearsList(); // E. 
  //------------------------------------------------------------//
  

  //*******************************************************************************************************************************//
  // ==== Challenge 5 ====
  // Count how many cars are older than the year 2000. 
        // Use the years array from before (or create new one)
        // Get the length of this array
  //------------------------------------------------------------//
  const oldCarsLength = () => {
    let oldCars = [];
    for (let i = 0; i < inventory.length; i++){
      let years = inventory[i]['car_year'];
      if (years < 2000) {
        oldCars.push(years);
      }
    }
    console.log(oldCars.length);
  }
  
  oldCarsLength();
  //------------------------------------------------------------//


  //*******************************************************************************************************************************//
  // ==== Challenge 6 ====
  // Return an array that only contains BMW and Audi cars.  
  // Once you have populated the BMWAndAudi array, use JSON.stringify() to show the results of the array in the console.
  //------------------------------------------------------------//
  const specificVehicles = () => {
    bmwAndAudi = [];
    for (let i = 0; i < inventory.length; i++) {
      if (inventory[i]['car_make'].toLowerCase() === 'audi' || inventory[i]['car_make'].toLowerCase() === 'bmw') {
        bmwAndAudi.push(inventory[i]);
      }
    }
    JSON.stringify(console.log(bmwAndAudi));
  }
  
  specificVehicles();
  //------------------------------------------------------------//
MVP:
    1. getFilmCount

        //*******************************************************************************************************************************//
        console.log(array.length);
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


    2. getFirstStarshipName

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

    3. getSummary

        ???


        //------------------------------------------------------------------------------------------------------------------------------//
        // ==== Challenge 1: Use .forEach() ====
        // Create function (using .foreach) that creates a new array from runners that populates a new array with combined first and last name

        //   let fullNames = []
        
        //   runners.forEach((id) => {
        //       fullNames.push(id['first_name'] + " " + id['last_name']);
        //   })
        //   console.log(fullNames);	
        let fullNames = [];

        runners.forEach((i) => {
            fullNames.push(i['first_name'] + " " + i['last_name']);
        })
        console.log(fullNames);	
        
        //------------------------------------------------------------------------------------------------------------------------------//
        // ==== Challenge 2: Use .map() ====

        //Populate an array called `firstNamesAllCaps` that converts all first names to capitals.

        const firstNamesAllCaps = [];

        runners.map((i) => {
            firstNamesAllCaps.push(i['first_name'].toUpperCase());
        })

        console.log(firstNamesAllCaps);
        
        //   ----------------------------------------------------------------------


    4. getVehiclesCostInCreditsSumTotal

        //   ------------------------------------------------------------------------------------------------------------------------------//
        // ==== Challenge 4: Use .reduce() ====
        // Add up all the donations and populate the total into a ticketPriceTotal variable.

        const reducedDonations = runners.reduce((acc, i) => { // Refer to lecture notes for explanation about accumulator (or Mdn docs) (Accumulator and current_item)
            return acc += i.donation;
            }, 0); // Refer to lecture notes for explanation about 0 value (or mdn docs) // It's the starting number. (Can be manipulated)

        console.log(reducedDonations);
            
        //----------------------------------------------------------------------------------


    5. getStarshipPassengerAndCrewSumTotal

        //   --------------------------------------------------------------------------------------
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
        //   --------------------------------------------------------------------------------------

            

        //   ------------------------------------------------------------------------------------------------------------------------------//
        // ==== Challenge 4: Use .reduce() ====
        // Add up all the donations and populate the total into a ticketPriceTotal variable.

        const reducedDonations = runners.reduce((acc, i) => { // Refer to lecture notes for explanation about accumulator (or Mdn docs) (Accumulator and current_item)
            return acc += i.donation;
            }, 0); // Refer to lecture notes for explanation about 0 value (or mdn docs) // It's the starting number. (Can be manipulated)

        console.log(reducedDonations);
            
        //------------------------------------------------
    6. getNthFilm

        ???

        (Call array at N number);


Stretch: 
    1. getCargoCapacityTotal
    2. getFasterStarshipName
    3. getLargestCargoStarshipModelName
    4. getSlowestVehicleOrStarshipName


    Test test
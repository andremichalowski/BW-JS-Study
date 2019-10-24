//Create a higher order function and invoke the callback function to test your work. 
//You have been provided an example of a problem and a solution to see how this works with our items array.  
//Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

  // GIVEN THIS PROBLEM:
        // function firstItem(arr, cb) {
        //   // firstItem passes the first item of the given array to the callback function.
        // }

  // 1. SOLUTION (Base Fxn.):
        function firstItem(arr, cb) {
            return cb(arr[1]);
        }

        // NOTES ON THE SOLUTION:
            // firstItem is a higher order function.
            // It expects a callback (referred to as `cb`) as its second argument.
            // To test our solution, we can use the given `items` array and a variety of callbacks.
            // Note how callbacks can be declared separately, or inlined.

  // 2. TEST 1 (inlined callback):

    const test1A = firstItem(items, item => `I love my ${item} the most!`); /// ??? How does cb move in these cases.
    console.log(test1A); // "I love my Pencil!"

  // 3. TEST 2 (declaring callback before hand):

    function logExorbitantPrice(article) {
      return `This ${article} is worth a million dollars!`;
    };

    const test2A = firstItem(items, logExorbitantPrice);
    console.log(test2A); // This Pencil is worth a million dollars!"


// //-----------------------------------------------------------------------------------------------------//
// 1. LENGTH OF ARRAY -   // getLength passes the length of the array into the callback.
// A. Base fxn;
    function getLength(arr, cb) {
        cb(arr.length);
    };
// B. Test 1.
    // const test1B = getLength(items, (length) => {
    //     console.log(length);
    // });

    const test1B = getLength(items, (length) => {
        console.log(length);
    });

// C. Test 2.
    // function speakLength(length) {
    //     return `This array's length is: ${length}`;
    // };

    // const test2B = getLength(items, speakLength);
    // console.log(test2B);



// //-----------------------------------------------------------------------------------------------------//
// 2. LAST ITEM OF ARRAY - //   // last passes the last item of the array into the callback.
// A. Base fxn:
//     function last(arr, cb) {
//     cb(arr.length-1); 
//     }

// // B. TEST 1:

//     const test1C = last(items, item =>
  
// C. TEST 2:

//   last(items, (last) => {
//     console.log(last);
//   })    



// // //-----------------------------------------------------------------------------------------------------//
// function sumNums(x, y, cb) {
//   // sumNums adds two numbers (x, y) and passes the result to the callback.
//   const result = (x + y);
//   cb(result);
// }

// // ++++++++++++++++++++++++++++ sumNums adds two numbers (x, y) and passes the result to the callback.
// function sumNums(num1, num2, cb) {
//   cb = sumNumscb;
//   return sumNumscb.push(num1 + num2);     ///??? How does this work?
// }   


// function sumNums( x, y, cb) {
//   const result = ( x + y );
//   cb(result);
// }

// sumNums(5, 4, (total) => {
//   console.log(total);
// })


// // //-----------------------------------------------------------------------------------------------------//
// //-------MULTIPLY NUMBERS-------:   // multiplyNums multiplies two numbers and passes the result to the callback.

// //Base fxn:
// function multiplyNums(x, y, cb) {
//   let result = x * y;
//   cb(result);
// }
// // Callback fxn:
// const MultiplyFeeder = (result) => {
//   console.log('The result is ' + result);
// }
// // Call:
// multiplyNums(5, 4, MultiplyFeeder);


// //-----------------------------------------------------------------------------------------------------//
// function contains(item, list, cb) {
//   // contains checks if an item is present inside of the given array/list.
//   // Pass true to the callback if it is, otherwise pass false.
//   if (list[i] === item) {
//     return cb(true); //??? Better as "result = true";
//   } if else {
//     return cb(false);//??? Better as "result = false";
//   }
//   // Better as cb(result);
// }

// +++++++++++++++++++++++ contains checks if an item is present inside of the given array/list.
  // ++++++++++++++++++++++++++Pass true to the callback if it is, otherwise pass false.
// function containsItem(arr, item, cb) {
  
//   //MY SOLUTION .... CLOSE BUT WRONG...
//   //if item return true
//   //else return false

//   cb(if(arr.contains(item){
//     return (resultTrue);
//   })
//   else {
//     return (resultFalse);
//   })
// }

// const truePrint(resultTrue) => {
//   console.log('The result is true');
// }
// const falsePrint(resultFalse) => {
//   console.log('The result is false');
// }

// containsItem(items, Gum, answer...?)



// //SOURCED FROM OUTSIDE
// function contains(item, list, cb) {
//   // contains checks if an item is present inside of the given array/list.	  
//   cb((list.includes(item)));
//   if (list.includes(item)) {
//     cb(true)
//   } 
//   else
//     cb(false);
// }	}

// contains('yo-yo', items, (answer) => {
//   console.log(answer);
// });


//SOURCED FROM TL SESSION
// function contains(item, list, cb) {
//   // contains checks if an item is present inside of the given array/list.
//   // Pass true to the callback if it is, otherwise pass false.
//   for (let i = 0; i < list.length; i++) {
//     if (list[i] === item) {
//       let  result = true
//     } else {
//       let result = false
//       }
//   };
//   cb(result);
// };

// const printResult = (result) => {
//   console.log('The result is ' + result);
// }

// contains('gum', items, printResult);

///??????????????STILL INCOMPLETE

// /* STRETCH PROBLEM */

// function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
// }


// const duplicates = ['Pencil', 'Notebook', 'yo-yo', 'Gum', 'Pencil'];


// function removeDuplicates(array, cb) {	function removeDuplicates(array, cb) {
//   let results = []
//   let sorted = array.slice().sort();

//   // removeDuplicates removes all duplicate values from the given array.	  // removeDuplicates removes all duplicate values from the given array.
//   for (let i = 0; i < sorted.length - 1; i++) {
//     // compares values
//     if (sorted[i + 1] === sorted[i]) {
//       // remove duplicate from sorted array
//       // results.pop(sorted[i]); 
//       sorted.splice(i, 1);
//     }
//   }
  // Pass the duplicate free array to the callback function.	  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.	  cb(sorted);

// }	}
// removeDuplicates(duplicates, (array) => {
//   console.log("No more duplicates: " + array)
// });

// Check mutation
// console.log(duplicates)































// //Create a higher order function and invoke the callback function to test your work. 
// //You have been provided an example of a problem and a solution to see how this works with our items array.  
// //Study both the problem and the solution to figure out the rest of the problems.

// const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];



//   // GIVEN THIS PROBLEM:

//   // function firstItem(arr, cb) {
//   //   // firstItem passes the first item of the given array to the callback function.
//   //   return cb(arr[0]);
//   // }
// /*
//   // SOLUTION:

//   function firstItem(arr, cb) {
//     return cb(arr[0]);
//   }

//   // NOTES ON THE SOLUTION:

//     // firstItem is a higher order function.
//     // It expects a callback (referred to as `cb`) as its second argument.
//     // To test our solution, we can use the given `items` array and a variety of callbacks.
//     // Note how callbacks can be declared separately, or inlined.

//   // TEST 1 (inlined callback):

//     const test1 = firstItem(items, item => `I love my ${item}!`);
//     console.log(test1); // "I love my Pencil!"

//   // TEST 2 (declaring callback before hand):

//     function logExorbitantPrice(article) {
//       return `this ${article} is worth a million dollars!`;
//     };

//     const test2 = firstItem(items, logExorbitantPrice);
//     console.log(test2); // "this Pencil is worth a million dollars!"
// */


// function getLength(arr, cb) {
//   // getLength passes the length of the array into the callback.
//   cb(arr.length);
// }

// function last(arr, cb) {
//   // last passes the last item of the array into the callback.
//   cb(arr.length-1)
// }

// function sumNums(x, y, cb) {
//   // sumNums adds two numbers (x, y) and passes the result to the callback.
//   const result = ( x + y );
//   cb(result);
// }

// function multiplyNums(x, y, cb) {
//   // multiplyNums multiplies two numbers and passes the result to the callback.
//   const result = ( x * y);
//   cb (result);
// }

// function contains(item, list, cb) {
//   // contains checks if an item is present inside of the given array/list.
//   // Pass true to the callback if it is, otherwise pass false.
//   for (let i = 0; i < list.length; i++) {
//     if (list[i] === item) {
//       let  result = true
//     } else {
//       let result = false
//       }
//     }
//     cb(result);
// }

// // /* STRETCH PROBLEM */

// // function removeDuplicates(array, cb) {
//   // removeDuplicates removes all duplicate values from the given array.
//   // Pass the duplicate free array to the callback function.
//   // Do not mutate the original array.
// // }


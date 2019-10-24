// // A local community center is holding a fund raising 5k fun run and has invited 50 small businesses to make a small donation on their behalf for some much needed updates to their facilities.  Each business has assigned a representative to attend the event along with a small donation.

// // Scroll to the bottom of the list to use some advanced array methods to help the event director gather some information from the businesses.

const runners = [
    { id: 1, first_name: "Charmain", last_name: "Seiler", email: "cseiler0@wired.com", shirt_size: "2XL", company_name: "Divanoodle", donation: 75 },
    { id: 2, first_name: "Whitaker", last_name: "Ierland", email: "wierland1@angelfire.com", shirt_size: "2XL", company_name: "Wordtune", donation: 148 },
    { id: 3, first_name: "Julieta", last_name: "McCloid", email: "jmccloid2@yahoo.com", shirt_size: "S", company_name: "Riffpedia", donation: 171 },
    { id: 4, first_name: "Martynne", last_name: "Paye", email: "mpaye3@sciencedaily.com", shirt_size: "XL", company_name: "Wordware", donation: 288 },
    { id: 5, first_name: "Gussy", last_name: "Raraty", email: "graraty4@ucoz.ru", shirt_size: "L", company_name: "Oozz", donation: 291 },
    { id: 6, first_name: "Yule", last_name: "Tommasetti", email: "ytommasetti5@state.gov", shirt_size: "S", company_name: "Yodo", donation: 27 },
    { id: 7, first_name: "Kathie", last_name: "Majury", email: "kmajury6@guardian.co.uk", shirt_size: "3XL", company_name: "Zoomcast", donation: 261 },
    { id: 8, first_name: "Tanner", last_name: "Branton", email: "tbranton7@tmall.com", shirt_size: "2XL", company_name: "Realmix", donation: 28 },
    { id: 9, first_name: "Sarina", last_name: "Lasham", email: "slasham8@toplist.cz", shirt_size: "XL", company_name: "Gigashots", donation: 110 },
    { id: 10, first_name: "Bertie", last_name: "Lonergan", email: "blonergan9@issuu.com", shirt_size: "3XL", company_name: "Skinte", donation: 62 },
    { id: 11, first_name: "Trevor", last_name: "Studd", email: "tstudda@networkadvertising.org", shirt_size: "S", company_name: "Cogidoo", donation: 76 },
    { id: 12, first_name: "Malachi", last_name: "Okeshott", email: "mokeshottb@chron.com", shirt_size: "M", company_name: "DabZ", donation: 91 },
    { id: 13, first_name: "Berget", last_name: "Logsdail", email: "blogsdailc@wix.com", shirt_size: "M", company_name: "Mymm", donation: 9 },
    { id: 14, first_name: "Loise", last_name: "Rivlin", email: "lrivlind@behance.net", shirt_size: "2XL", company_name: "Linktype", donation: 204 },
    { id: 15, first_name: "Christan", last_name: "Kendall", email: "ckendalle@example.com", shirt_size: "XS", company_name: "Skinix", donation: 252 },
    { id: 16, first_name: "Kayla", last_name: "Whitwam", email: "kwhitwamf@deliciousdays.com", shirt_size: "2XL", company_name: "Oyope", donation: 147 },
    { id: 17, first_name: "Heddie", last_name: "Heningam", email: "hheningamg@tripadvisor.com", shirt_size: "L", company_name: "Skinix", donation: 172 },
  ];
  
  
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
  
//   ------------------------------------------------------------------------------------------------------------------------------//
// ==== Challenge 3: Use .filter() ====
// Array containing only those runners with large sized shirts.

let largeShirts = [];

runners.filter((i) => {
    if (i['shirt_size'] === 'L') {
        largeShirts.push([i]);
    }
})

console.log(largeShirts);
  
//  Additional Questions:
// 1. How would you do an array of just names for those individuals with no other details. 
        // Push "i['detail_you_want_to_be_displayed'], i['other_detail_you_want_displayed']"
// 2. ???? How would you do an array of names no strings.

// 3. ???? How would you do an array of those names with strings.
// 4. ???? Why do i need brackets around i for some cases but not others
  
//   ------------------------------------------------------------------------------------------------------------------------------//
// ==== Challenge 4: Use .reduce() ====
// Add up all the donations and populate the total into a ticketPriceTotal variable.

const reducedDonations = runners.reduce((acc, i) => { // Refer to lecture notes for explanation about accumulator (or Mdn docs) (Accumulator and current_item)
    return acc += i.donation;
    }, 0); // Refer to lecture notes for explanation about 0 value (or mdn docs) // It's the starting number. (Can be manipulated)

console.log(reducedDonations);
    
//------------------------------------------------------------------------------------------------------------------------------//
// // ==== Challenge 5: Be Creative ====
// // Now that you have used .forEach(), .map(), .filter(), and .reduce().  I want you to think of potential problems you could solve given the data set and the 5k fun run theme.  Try to create and then solve 3 unique problems using one or many of the array methods listed above.

// // Problem 1: ".map" to multiply the variables in an array by 2.

    var array1 = [2, 4, 11, 32];

    // pass a function to map
    const map1 = array1.map(x => x * 2);

    console.log(map1);
    // expected output: Array [4, 8, 22, 64]


// // Problem 2: ".filter" for long words.

    let shoes = ['Adidas', 'Puma', 'Nike', 'Reebok', 'Asics'];

    const result = shoes.filter(shoe => shoe.length > 4);

    console.log(result);
    // expected output: Array ["Adidas", "Reebok"]



// // Problem 3

    const array3 = [1, 2, 3, 4, 5];
    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    // 1 + 2 + 3 + 4 + 5
    console.log(array3.reduce(reducer));
    // expected output: 15

    // 5 + 1 + 2 + 3 + 4 + 5
    console.log(array3.reduce(reducer, 5));
    // expected output: 20
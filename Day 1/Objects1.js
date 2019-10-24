//OBJECTS

    //1. Making an object

    const antonietta = {
        id: 5,
        name: "Antonietta",
        email: "adaine5@samsung.com",
        gender: "F",
        multiplyNums: (num1, num2) => {
            return (num1*num2);
        },
        speakWithReference: () => {
            return (`Hello, my name is ${antonietta.name}`);
        },
        speakWithParameter: (parameter) => {
            return (`Sometimes I ask myself is ${antonietta.name} ${parameter}`);
        },
        speakWithThisKeyword: function () {
            return (`Then I remember I have an email which is: ${this.email}`);
        },
        child: {
            id: 4,
            name: "Gannie",
            email: "gmartinson3@illinois.edu",
            gender: "M",
            speakReassurance: (param) => {
                return (`Mom...you ${antonietta.name} are a ${param}...we are both ${param}s`);
            },
        },

    }

    //2. Logging keys to elicit values:

        console.log(antonietta.name);
        // or w/bracket notation
        console.log(antonietta['gender']);

    //3. Login functions:

        console.log(antonietta.multiplyNums(3,2));
        // or with reference
        console.log(antonietta.speakWithReference()); 
        // or with parameter reference
        console.log(antonietta.speakWithParameter('real')); //<<<(Don't forget your strings)
         // or with "this" keyword
        console.log(antonietta.speakWithThisKeyword());

    //4. Calling from nested objects (children):

        console.log(antonietta.child.speakReassurance('robot'));



/////------------------------------------QUESTIONS 1----------------------------/////

// How to delete a branch you made accidentally and then get back to previous branch
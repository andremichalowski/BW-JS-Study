/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding - When in the global scope, the value of "this" will be the window/console Object;
* 2. Implicity Binding - Whenever a function is called by a preceding dot, the object before that dot is "this."
* 3. New Binding - Whenever a constructor function is used, this refers to the specific instance of the object that is created and returned by the constructor function.
* 4. Explicit Binding - Wheever JavaScript's call or apply method is used, this is explicityly defined.
*
* write out a code example of each explanation above
*/

// +++Principle 1+++ //Window Binding ex.

    //1. Notes ex.:
        // function sayName(name) {
        //     console.log(this);
        //     return name;
        // }
        // sayName("D'Artagnan");

    //2. My ex. for a Window Bind (Non/Working Function):
        // let horse = 'Seabiscit';
        // let lucky = function() {
        //     console.log(this);
        // };
        // lucky();
    //3. My ex. for a Window Bind (Working Function):
        let myFunction = function() {
            console.log(this.luckyhorse);
        }
        var luckyhorse = 'Seabiscit' ;
        myFunction(); 
    //4. Another ex.:
        // console.log(this);


// +++Principle 2+++ // Implicit Binding ex.

    //1. Notes ex.:
        // const sayNameFunc = obj => {
        // obj.sayName = function() {
        //     console.log(`Hello my name is ${this.name}`);
        //     console.log(this);
        // };
        // };
        // const me = { name: 'Ryan' };
        // const you = { name: 'Freddy' };
        // sayNameFunc(me);
        // sayNameFunc(you);
        // // Invoke Methods on our objects
        // me.sayName();
        // you.sayName(); //***HERE "this" IS "me" AND THEN "you"
    //2. My ex.:
        function red() {
            console.log(this.notAHerring);
        }
        var obj = {
            notAHerring: 'implicitBinding',
            red:red,
        };
        obj.red();
    //3. Another ex.: 
        // const usa = {
        //     city: 'Las Vegas',
        //     state: 'Nevada',
        //     speak: function() {
        //     return `${this.city} is a city in ${this.state}`;
        //     }
        // }
        
        // console.log(usa.speak());

// +++Principle 3+++ // New Binding ex.

    //1. Notes ex.:
        //function CordialPerson(greeter) {
        // this.greeting = 'Hello ';
        // this.greeter = greeter;
        // this.speak = function() {
        //     console.log(this.greeting + this.greeter);
        //     console.log(this);
        // };
        // }

        // const jerry = new CordialPerson('Newman');
        // const newman = new CordialPerson('Jerry');

        // jerry.speak();
        // newman.speak(); //Here "CordialPerson" is the constructor function, and "this" refers to jerry and newman parameters/attributes respectively.

    //2. My ex.
        // function Foo() {
        //     this.name = 'Adam';
        //         this.say = function () {
        //             return "I am " + this.name;
        //     };
        // }
        // var name = 'Adam';
        // var result = new Foo();
        // console.log(result.name);

        function User (name, age) {
            this.name = name
            this.age = age
        }

        const me = new User('Andre', 27);
        console.log(me);
    //3. Another ex.:
        // function UsaState(attributes) {
        //     this.city = attributes.city;
        //     this.state = attributes.state;
        // }
        
        // UsaState.prototype.doStuff = function(adjective ="nice") {
        //     console.log(`${this.city} is a ${adjective} city in ${this.state}`);
        // }
        
        // const newUsaState = new UsaState({
        //     city: 'San Francisco',
        //     state: 'California'
        // });
        
        // newUsaState.doStuff('fun');


// +++Principle 4+++ // Explicit Binding ex. 

    //1. Notes ex.
        //jerry.speak.call(newman); newman.speak.apply(jerry);

    //2. My ex.
        function greet (l1, l2, l3, l4) {
            alert(`Hello, my name is ${this.name} and I know ${l1}, ${l2}, ${l3}, and ${l4}.`)
        }
        const user = {
            name: 'Andre',
            age: 27,
        }

        const languages = ['English', 'Polish', 'Spanish', 'French']
        // greet.call(user, languages[0], languages[1], languages[2], languages[3]);
        // greet.apply(user, languages);

    //3. Another ex.:
        // const sanDiego = new UsaState({
        //     city: 'San Diego',
        //     state: 'California'
        // });
        
        // sanDiego.doStuff.apply(newUsaState);
        // sanDiego.doStuff('fun')
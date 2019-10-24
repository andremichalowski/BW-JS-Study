// CODE here for your Lambda Classes


// * We have a school to build here! This project will get you used to thinking about classes in JavaScript and building them from a brand new data set.
// * Lambda personnel can be broken down into three different types of `people`.
//   * **Instructors** - extensions of Person
//   * **Students** - extensions of Person
//   * **Project Managers** - extensions of Instructors
// * **IMPORTANT** - You'll need to create 2 - 3 objects for each class and test them according to their unique Attributes. For example:

// ```js
// const fred = new Instructor({
//   name: 'Fred',
//   location: 'Bedrock',
//   age: 37,
//   favLanguage: 'JavaScript',
//   specialty: 'Front-end',
//   catchPhrase: `Don't forget the homies`
// // });
// ```

// #### Person

// * First we need a Person class. This will be our `base-class`
// * Person receives `name` `age` `location` all as props
// * Person receives `speak` as a method.
// * This method logs out a phrase `Hello my name is Fred, I am from Bedrock` where `name` and `location` are the object's own props

class Person {
    constructor (props){
    this.name = props.name;
    this.age = props.age;
    this.location = props.location;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
};

// #### Instructor

// * Now that we have a Person as our base class, we'll build our Instructor class.
// * Instructor uses the same attributes that have been set up by Person
// * Instructor has the following unique props:
//   * `specialty` what the Instructor is good at i.e. 'redux'
//   * `favLanguage` i.e. 'JavaScript, Python, Elm etc.'
//   * `catchPhrase` i.e. `Don't forget the homies`
// * Instructor has the following methods:
//   * `demo` receives a `subject` string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
//   * `grade` receives a `student` object and a `subject` string as arguments and logs out '{student.name} receives a perfect score on {subject}'

class Instructor extends Person {
    constructor (props) {
        super(props);
            this.specialty = props.specialty;
            this.favLanguage = props.favLanguage;
            this.catchPhrase = props.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}`;
    }
    grade(subject) {
        return `${this.name} receives a perfect score on ${subject}`;
    }
    //********/
    numberGrade(student){
    //   return student.grade + ((Math.random()*100));
    // }
    if(student.grade <70){
      return student.grade += (Math.floor(Math.random()*10));
    }
    else{
      return student.grade -= (Math.floor(Math.random()*10));
    }
  }
};

// #### Student

// * Now we need some students!
// * Student uses the same attributes that have been set up by Person
// * Student has the following unique props:
//   * `previousBackground` i.e. what the Student used to do before Lambda School
//   * `className` i.e. CS132
//   * `favSubjects`. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
// * Student has the following methods:
//   * `listsSubjects` a method that logs out all of the student's favoriteSubjects one by one.
//   * `PRAssignment` a method that receives a subject as an argument and logs out that the `student.name has submitted a PR for {subject}`
//   * `sprintChallenge` similar to PRAssignment but logs out `student.name has begun sprint challenge on {subject}`

class Student extends Person {
    constructor (props) {
        super(props);
            this.previousBackground = props.previousBackground;
            this.className = props.className;
            this.favSubjects = props.favSubjects;
            this.grade = props.grade;
    }
    listSubjects() {
        return `${this.favSubjects}`;
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`//this is the one that is different than the "grade" and ones above
    }
    graduate() {
      if (this.grade > 70 ) {
        return `Congratulations, ${this.name} is ready to graduate!!!`;
    } else {
      return `Oh well, back to studying...`;
    }
  }
};

// #### Project Manager

// * Now that we have instructors and students, we'd be nowhere without our PM's
// * ProjectManagers are extensions of Instructors
// * ProjectManagers have the following unique props:
//   * `gradClassName`: i.e. CS1
//   * `favInstructor`: i.e. Sean
// * ProjectManagers have the following Methods:
//   * `standUp` a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
//   * `debugsCode` a method that takes in a student object and a subject and logs out `{name} debugs {student.name}'s code on {subject}`

class ProjectManager extends Instructor {
    constructor (props) {
        super(props);
            this.gradClassName = props.gradClassName;
            this.favInstructor = props.favInstructor;
    }
    standup(channel) {
        return `${this.name} announces to ${channel}, @channel standup times!`;
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}.`;
    }

};




//---Objects---//

//-Person
// this.name = props.name,
// this.age = props.age,
// this.location = props.location,
const Alejandro = new Person({
    name: 'Alejandro DiSamore',
    age: '21',
    location: 'Paris France',
  });

  const Marta = new Person({
    name: 'Marta Fatset',
    age: '25',
    location: 'Gdansk Poland',
  });

//-Instructor
// this.specialty = props.specialty,
// this.favLanguage = props.favLanguage,
// this.catchPhrase = props.catchPhrase,
const Marie = new Instructor({
    name: 'Marie Curie',
    age: '27',
    location: 'Warsaw Poland',
    specialty: 'Bio-Chemistry',
    favLanguage: 'French',
    catchPhrase: 'Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less.'
  });

  const Antoni = new Instructor({
    name: 'Antoni Gaudi',
    age: '26',
    location: 'Reus Catalonia',
    specialty: 'Architechture',
    favLanguage: 'Catalan',
    catchPhrase: 'Gothic art is imperfect, only half resolved; it is a style created by the compasses, a formulaic industrial repetition.'
  });

//-Student
// this.previousBackground = props.previousBackground,
// this.className = props.className,
// this.favSubjects = props.favSubjects,

const Edward = new Student({
    name: 'Edward Munch',
    age: '35',
    location: 'Norway',
    previousBackground: 'Depression',
    className: 'SoulPainting',
    favSubjects: 'Impressionism, CS5, JS',
    grade: 80,
  });

  const Dua = new Student({
    name: 'Dua Lipa',
    age: '45',
    location: 'Albania',
    previousBackground: 'Singing',
    className: 'FamousSingers',
    favSubjects: 'Singing, HTML',
    grade: 85,
  });

//-Project Manager
// this.gradClassName = props.gradClassName,
// this.favInstructor = props.favInstructor,

const Alice = new ProjectManager ({
    name: 'Alice Walker',
    age: '50',
    location: 'U.S.',
    specialty: 'Writing',
    favLanguage: 'English',
    catchPhrase: 'The most common way people give up their power is by thinking they dont have any.',
    gradClassName: 'CS1',
    favInstructor: 'Neil',
  });

  const Darude = new ProjectManager ({
    name: 'Darude DJ',
    age: '14',
    location: 'Finland',
    specialty: 'DJ',
    favLanguage: 'Finish',
    catchPhrase: 'Dun dun dun dun dun dun...',
    gradClassName: 'WEBEU3',
    favInstructor: 'Georgio Armani',
  });

//++++log tests++++

//Person tests:
console.log(Marta.speak());
console.log(Darude.speak());
//Instructor tests:
console.log(Antoni.demo('CS5'));
console.log(Antoni.grade('HTML'));
console.log(Marie.grade('Chemistry'));
//Student tests:
console.log(Edward.listSubjects());
console.log(Dua.listSubjects());
  console.log(Edward.PRAssignment('Sprint3'));
  console.log(Dua.PRAssignment('JSAssessment'));
//Project Manager tests:
  console.log(Alice.standup('WEBEU3'));
  console.log(Darude.standup('PB5'));
  console.log(Alice.debugsCode(Dua, 'HTML'));
  console.log(Darude.debugsCode(Edward, 'CSS'));



  

// #### Stretch Problem

// * Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100.
// * Now that our students have a grade build out a method on the Instructor (this will be used by _BOTH_ instructors and PM's) that will randomly add or subtract points to a student's grade. _Math.random_ will help.
// * Add a graduate method to a student.
//   * This method, when called, will check the grade of the student and see if they're ready to graduate from Lambda School
//   * If the student's grade is above a 70% let them graduate! Otherwise go back to grading their assignments to increase their score.

//grade prop
  //(done)
// Instructor numberGrade method:
console.log(Antoni.numberGrade(Dua));
console.log(Antoni.numberGrade(Edward));
//Graduate method:
console.log(Dua.graduate());
console.log(Edward.graduate());

// CODE here for your Lambda Classes
class Person {
  constructor (attributes) {
    this.name = attributes.name,
    this.age = attributes.age,
    this.location = attributes.location,
    this.gender = attributes.gender
  }

  speak () {
    console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
  }
}

class Instructor extends Person {
  constructor (attributes) {
    super(attributes);
    this.specialty = attributes.specialty,
    this.favLanguage = attributes.favLanguage,
    this.catchPhrase = attributes.catchPhrase
  }

  demo (subject) {
    console.log(`Today we are learning about ${subject}`);
  }

  grade (student, subject) {
    console.log(`${student.name} receives a perfect score on ${subject}`)
  }
}

class Student extends Person {
  constructor (attributes) {
    super(attributes);
    this.previousBackground = attributes.previousBackground,
    this.className = attributes.className,
    this.favSubjects = attributes.favSubjects
  }

  listSubjects () {
    this.favSubjects.forEach(subject => console.log(subject));
  }

  PRAssignment (subject) {
    console.log(`${this.name} has submitted a PR for ${subject}`);
  }

  sprintChallenge (subject) {
    console.log(`${this.name} has begun sprint challenge on ${subject}`);
  }
}

class ProjectManager extends Instructor {
  constructor (attributes) {
    super(attributes);
    this.gradClassName = attributes.gradClassName,
    this.favInstructor = attributes.favInstructor
  }

  standUp (slackChannel) {
    console.log(`${this.name} announces to ${slackChannel}, @channel standy times!`)
  }

  debugsCode (student, subject) {
    console.log(`${this.name} debugs ${student.name}'s codeon ${subject}`)
  }
}

const ken = new Student ({
  name: "Ken Ruf",
  age: 30,
  location: "San Antonio",
  gender: "Male",
  previousBackground: "Marketing",
  className: "WEBPT5",
  favSubjects: ["HTML", "CSS", "JavaScript"]
})

const bob = new Student ({
  name: "Bob Jones",
  age: 90,
  location: "Antarctica",
  gender: "Male",
  previousBackground: "Crab Fishing",
  className: "WEBPT97",
  favSubjects: ["Ruby", "iOS", "React"]
})

ken.listSubjects();
bob.listSubjects();
ken.PRAssignment("CSS");
bob.PRAssignment("Javascript");
ken.sprintChallenge("React");
bob.sprintChallenge("UI");

const cam = new Instructor ({
  name: "Cam Pope",
  age: 31,
  location: "Salt Lake City",
  gender: "Male",
  specialty: "Full Stack Web",
  favLanguage: "JavaScript",
  catchPhrase: "Don't actually do this but I'll show you"
})

const izze = new Instructor ({
  name: "Izze Blackberry",
  age: 1,
  location: "On my desk",
  gender: "N/A",
  specialty: "Juice",
  favLanguage: "Soda",
  catchPhrase: "No added sugar or preservatives"
})

cam.grade(ken, "CSS");
izze.grade(bob, "Ruby");
cam.demo("LESS compiler");
izze.demo("Carbonation");

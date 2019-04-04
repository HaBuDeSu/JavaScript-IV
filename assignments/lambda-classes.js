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

  listsSubjects () {
    favoriteSubjects.forEach(subject => console.log(subject));
  }

  PRAssignment (subject) {
    console.log(`${this.name} has submitted a PR for ${subject}`);
  }

  sprintChallenge () {
    console.log(`${this.name} has begun sprint challenge on ${subject}`);
  }
}

class ProjectManager extends Instructors {
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

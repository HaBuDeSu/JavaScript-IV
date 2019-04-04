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

// #### Project Manager
//
// * Now that we have instructors and students, we'd be nowhere without our PM's
// * ProjectManagers are extensions of Instructors
// * ProjectManagers have the following unique props:
//   * `gradClassName`: i.e. CS1
//   * `favInstructor`: i.e. Sean
// * ProjectManagers have the following Methods:
//   * `standUp` a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
//   * `debugsCode` a method that takes in a student object and a subject and logs out `{name} debugs {student.name}'s code on {subject}`

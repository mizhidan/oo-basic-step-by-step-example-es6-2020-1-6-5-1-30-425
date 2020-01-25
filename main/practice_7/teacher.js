import Person from './person.js'

class Teacher extends Person {
  constructor(name, age, klass) {
    super(name, age);
    this.klass = klass;
  }

  introduce() {
    return `${super.introduce()} I am a Teacher. I teach ${this.klass ? `Class ${this.klass.number}` : 'No Class'}.`
  }

  introduceWith(student) {
    return `${super.introduce()} I am a Teacher. I${this.klass.number === student.klass.number ? "" : " don't"} teach ${student.name}.`;
  }
}

module.exports = Teacher;
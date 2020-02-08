import Person from './person.js'

class Teacher extends Person {
  constructor(id, name, age, klass) {
    super(id, name, age);
    this.klass = klass;
  }

  introduce() {
    return `${super.introduce()} I am a Teacher. I teach ${this.klass ? `Class ${this.klass.number}` : 'No Class'}.`
  }
}

module.exports = Teacher;
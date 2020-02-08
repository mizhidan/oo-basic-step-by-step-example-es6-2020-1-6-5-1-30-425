import Person from './person.js'

class Student extends Person {
  constructor(id, name, age, klass) {
    super(id, name, age);
    this.klass = klass;
  }

  introduce() {
    return `${super.introduce()} I am a Student. I am `
      + (this.klass.leader === this ? 'Leader of' : 'at')
      + ` Class ${this.klass.number}.`
  }
}

module.exports = Student;
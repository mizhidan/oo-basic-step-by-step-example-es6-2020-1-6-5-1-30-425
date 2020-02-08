import Person from './person.js'

class Teacher extends Person {
  constructor(id, name, age, klasses) {
    super(id, name, age);
    this.klasses = klasses;
  }

  introduce() {
    let klassNum;
    if (this.klasses) {
      klassNum = this.klasses.map((klass) => klass.number).join(', ');
    }
    return `${super.introduce()} I am a Teacher. I teach `
      + (this.klasses ? 'Class ' + klassNum : 'No Class')
      + '.';
  }

  isTeaching(student) {
    return this.klasses.includes(student.klass);
  }

  callWithLeader(student) {
    console.log(`I am ${this.name}. I know ${student.name} become Leader of Class ${student.klass.number}.`);
  }

  callWithJoin(student) {
    console.log(`I am ${this.name}. I know ${student.name} has joined Class ${student.klass.number}.`);
  }
  
}

module.exports = Teacher;
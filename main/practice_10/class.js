class Class {
    constructor(klass) {
      this.number = klass;
    }
  
    getDisplayName() {
      return `Class ${this.number}`;
    }
  
    isIn(student) {
      return student.klass.number === this.number;
    }
  
    assignLeader(student) {
      if (this.isIn(student)) {
        this.leader = student;
      } else {
        console.log("It is not one of us.");
      }
    }
  
    appendMember(student) {
      student.klass = this;
    }
  }
  
  module.exports = Class;
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
      }
    }
  }
  
  module.exports = Class;
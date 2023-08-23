import { Person } from "./Person.js";

export class Student extends Person {
  constructor(_name, _address, _email, _mathScore, _physicScore, _chemistryScore) {
    super(_name, _address, _email);
    this.mathScore = _mathScore;
    this.physicScore = _physicScore;
    this.chemistryScore = _chemistryScore;
  }
}

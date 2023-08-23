import { Person } from "./Person.js";

export class Employee extends Person {
  constructor(_name, _address, _email, _workDays, _dailySalary) {
    super(_name, _address, _email);
    this.workDays = _workDays;
    this.dailySalary = _dailySalary;
  }
}

import { Student } from "./Student.js";
import { Employee } from "./Employee.js";
import { Customer } from "./Customer.js";

export class ListPerson {
  constructor() {
    this.persons = [];
  }

  addPerson(person) {
    this.persons.push(person);
  }

  getListPerson() {
    return this.persons;
  }

  displayPersons() {
    this.persons.forEach(person => {
      if (person instanceof Student) {
        console.log("Student:", person.name);
      } else if (person instanceof Employee) {
        console.log("Employee:", person.name);
      } else if (person instanceof Customer) {
        console.log("Customer:", person.name);
      } else {
        console.log("Person:", person.name);
      }
    });
  }
}

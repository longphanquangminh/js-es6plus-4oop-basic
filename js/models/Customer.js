import { Person } from "./Person.js";

export class Customer extends Person {
  constructor(_name, _address, _email, _companyName, _invoiceValue, _review) {
    super(_name, _address, _email);
    this.companyName = _companyName;
    this.invoiceValue = _invoiceValue;
    this.review = _review;
  }
}

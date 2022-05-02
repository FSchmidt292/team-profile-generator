class Employee {
  constructor (id) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.id = id;
    this.email = email;
  }
  getId() {
    return this.id;
  }
  getName() {
    this.name = firstName + lastName;
    return this.name
  }
  getEmail() {
    return this.email
  }
};

module.exports = Employee;

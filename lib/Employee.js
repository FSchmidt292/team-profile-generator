class Employee {
  constructor (id, name, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = 'Employee';
  }
  getId() {
    return this.id;
  }
  getName() {
    this.name = this.name;
    return this.name
  }
  getEmail() {
    return this.email
  }
  getRole() {
      return this.role;
  }
};

module.exports = Employee;

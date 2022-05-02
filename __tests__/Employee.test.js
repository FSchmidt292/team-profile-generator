const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
  const employee = new Employee('69','Trey', 'Schmidt');

  expect(employee.firstName).toBe('Trey');
  expect(employee.lastName).toBe('Schmidt');
  expect(employee.id).toBe('69');

}) 
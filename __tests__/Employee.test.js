const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
  const employee = new Employee(1,'Trey Schmidt', 'email@email.com');

  expect(employee.name).toBe('Trey Schmidt');
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toBe('email@email.com');
  expect(employee.role).toBe('Employee');
}) 
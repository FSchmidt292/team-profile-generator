const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
  const employee = new Employee(1,'Trey Schmidt', 'email@email.com');

  expect(employee.name).toBe('Trey Schmidt');
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toBe('email@email.com');
  expect(employee.role).toBe('Employee');
});

test('get employee id value', () => {
    const employee = new Employee(1,'Trey Schmidt', 'email@email.com');
    expect(employee.getId()).toEqual(expect.any(Number));
})

test('get employee name value', () => {
    const employee = new Employee(1,'Trey Schmidt', 'email@email.com');

    expect(employee.getName()).toBe('Trey Schmidt');
});

test('get employee email value', () => {
    const employee = new Employee(1, 'Trey Schmidt', 'email@email.com');

    expect(employee.getEmail()).toBe('email@email.com');
});

test('get employee role value', () => {
    const employee = new Employee(1, 'Trey Schmidt', 'email@email.com');

    expect(employee.getRole()).toEqual(expect.any(String));
})
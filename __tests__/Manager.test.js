const Manager = require('../lib/Manager');

test('Creates a manager object', () => {
    
    const manager = new Manager(1,'Trey Schmidt', 'email@email.com', 1);
    expect(manager.name).toBe('Trey Schmidt');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toBe('email@email.com');
    expect(manager.officeNumber).toEqual(expect.any(Number));
    expect(manager.role).toBe('Manager');
});

test('returns role for the manager', () => {
    const manager = new Manager(1,'Trey Schmidt', 'email@email.com', 1);

    expect(manager.getRole()).toBe('Manager');
});

test('returns officeNumber of manager', () => {
    const manager = new Manager(1,'Trey Schmidt', 'email@email.com', 1);

    expect(manager.getOfficeNumber()).toBe(1);
})

test

module.export = Manager;
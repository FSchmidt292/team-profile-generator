const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern(1, 'Trey Schmidt', 'email@email.com', 'Harvard');

    expect(intern.name).toBe('Trey Schmidt');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toBe('email@email.com');
    expect(intern.school).toBe('Harvard');
    expect(intern.role).toBe('Intern');
});

test('returns school of intern', () => {
    const intern = new Intern(1, 'Trey Schmidt', 'email@email.com', 'Harvard');

    expect(intern.getSchool()).toBe('Harvard');
});

test(`returns intern's role`, () => {
    const intern = new Intern(1, 'Trey Schmidt', 'email@email.com', 'Harvard');
    expect(intern.getRole()).toBe('Intern');
})
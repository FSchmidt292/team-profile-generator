const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer(1, 'Trey Schmidt', 'email@email.com', 'FSchmidt292');

    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.name).toBe('Trey Schmidt');
    expect(engineer.email).toBe('email@email.com'),
    expect(engineer.github).toBe('FSchmidt292')
});

test('returns github username for engineer', () => {
    const engineer = new Engineer(1, 'Trey Schmidt', 'email@email.com', 'FSchmidt292');

    expect(engineer.getGithub()).toBe('FSchmidt292');
});

test(`returns role for engineer`, () => {
    const engineer = new Engineer('Mark', 1, 'fake@fakemail.com', 'octocat');

    expect(engineer.getRole()).toBe('Engineer');
});
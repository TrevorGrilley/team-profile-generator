const Intern = require("../lib/Intern");
const intern = new Intern('Jason', 15, 'jason@gmail.com', 'UNF');

test('test for intern info', () => {
    expect(intern.name).toBe('Jason');
    expect(intern.id).toBe('15');
    expect(intern.email).toBe('Jason@gmail.com')
});

test("Test to set set school with constructor", () => {
    expect(intern.school).toEqual('UNF');
});

test("getRole() should return \"Intern\"", () => {
    expect(intern.getRole()).toEqual("Intern");
});

test("test to find school from getSchool", () => {
    expect(intern.getSchool()).toEqual('UNF');
});
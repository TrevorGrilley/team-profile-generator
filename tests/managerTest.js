const Manager = require("../lib/Manager");

const manager = new Manager('Jason', 15, 'Jason@gmail.com', 231);

test('test for manager info', () => {
    expect(manager.name).toBe('Jason');
    expect(manager.id).toBe('15');
    expect(manager.email).toBe('Jason@gmail.com')
});

test("test to set office number", () => {
    // const manager = new Manager('Jason', 15, 'Jason@gmail.com', 231);
    expect(manager.officeNum).toEqual(231);
});

test('getRole() should return "Manager"', () => {
    expect(manager.getRole()).toEqual("Manager");
});

test("Test to get office number", () => {
    expect(manager.getOfficeNum()).toEqual(231);
});
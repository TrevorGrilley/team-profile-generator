const Employee = require('../lib/Employee');

const employee = new Employee('Jason', '15', 'Jason@gmail.com');

test('can set name', () => {
    expect(employee.name).toBe('Jason');
});

test("test for employee instance", () => {
  expect(employee instanceof Employee).toEqual(true);
});

test("test to get name from getName()", () => {
  expect(employee.getName()).toEqual('Jason');
});

test("test to set id with constructor", () => {
  expect(employee.ID).toEqual(12);
});

test('test if we can get ID from getId()', () => {
    expect(employee.getId()).toBe('15');
});

test("test to set email with constructor", () => {
  expect(employee.email).toEqual('Jason@gmail.com');
});

test('test if we can get email from getEmail()', () => {
    expect(employee.getEmail()).toBe('Jason@gmail.com');
});

test('test if we can get role from getRole()', () => {
    expect(employee.getRole()).toBe('Employee');
});
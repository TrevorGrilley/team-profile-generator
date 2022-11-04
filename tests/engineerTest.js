const Engineer = require("../lib/Engineer");

const engineer = new Engineer('Jason', 15, 'Jason@gmail.com', 'jason-Github');

test("test to get name from getName()", () => {
  expect(employee.getName()).toEqual('Jason');
});

test('test if we can get ID from getId()', () => {
  expect(employee.getId()).toBe('15');
});

test("test to set up github with constructor", () => {
    expect(engineer.Github).toEqual('mike-Github');
});

test("getRole() should return \"Engineer\"", () => {
    expect(engineer.getRole()).toEqual("Engineer");
});

test("test to get github user with getGithub", () => {
    expect(engineer.getGithub()).toEqual('Jason-Github');
});

test("test to find out role from getRole", () => {
  expect(engineer.getRole()).toBe('Engineer');
});
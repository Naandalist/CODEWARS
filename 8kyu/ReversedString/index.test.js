const solution = require("./index");

describe("8kyu: Solution", () => {
  test('world should result in "dlrow"', () => {
    expect(solution("world")).toBe("dlrow");
  });

  test('hello should result in "olleh"', () => {
    expect(solution("hello")).toBe("olleh");
  });

  test('empty string should result in ""', () => {
    expect(solution("")).toBe("");
  });

  test('"h" should result in "h"', () => {
    expect(solution("h")).toBe("h");
  });
});

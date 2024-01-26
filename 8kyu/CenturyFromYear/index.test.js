const century = require("./index");

describe("8 kyu: century", () => {
  test("Testing for year 1705", () => {
    expect(century(1705)).toBe(18);
  });
  test("Testing for year 1900", () => {
    expect(century(1900)).toBe(19);
  });
  test("Testing for year 1601", () => {
    expect(century(1601)).toBe(17);
  });
  test("Testing for year 2000", () => {
    expect(century(2000)).toBe(20);
  });
  test("Testing for year 89", () => {
    expect(century(89)).toBe(1);
  });
});

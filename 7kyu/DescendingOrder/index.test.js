const descendingOrder = require("./index");

describe("7kyu descending order", () => {
  test("return must be 0", () => {
    expect(descendingOrder(0)).toBe(0);
  });
  test("return must be 1", () => {
    expect(descendingOrder(1)).toBe(1);
  });
  test("return must be 111", () => {
    expect(descendingOrder(111)).toBe(111);
  });
  test("return must be 51", () => {
    expect(descendingOrder(15)).toBe(51);
  });
  test("return must be 2110", () => {
    expect(descendingOrder(1021)).toBe(2110);
  });
  test("return must be 987654321", () => {
    expect(descendingOrder(123456789)).toBe(987654321);
  });
});

const pigIt = require("./index");

describe("5kyu: pigIt", () => {
  test("must return igPay 'atinlay siay oolcay'", () => {
    expect(pigIt("Pig latin is cool")).toBe("igPay atinlay siay oolcay");
  });
  test("must return igPay 'atinlay siay oolcay'", () => {
    expect(pigIt("This is my string")).toBe("hisTay siay ymay tringsay");
  });
});

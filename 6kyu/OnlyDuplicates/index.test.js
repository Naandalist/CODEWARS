const onlyDuplicates = require("./index");

describe("6kyu: Only Duplicates", () => {
  test("must return cceee", () => {
    expect(onlyDuplicates("abccdefee")).toBe("cceee");
  });
  test("must return ll", () => {
    expect(onlyDuplicates("hello")).toBe("ll");
  });
  test("must return cceee", () => {
    expect(onlyDuplicates("colloquial")).toBe("ollol");
  });
  test("must return foundersandcoders", () => {
    expect(onlyDuplicates("foundersandcoders")).toBe("ondersndoders");
  });
});

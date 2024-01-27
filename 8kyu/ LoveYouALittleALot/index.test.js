const howMuchILoveYou = require("./index");

describe("8kyu: howMuchILoveYou", function () {
  it("Basic tests", function () {
    expect(howMuchILoveYou(7)).toBe("I love you");
    expect(howMuchILoveYou(3)).toBe("a lot");
    expect(howMuchILoveYou(6)).toBe("not at all");
  });
});

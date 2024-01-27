const generateHashtag = require("./index");

describe("5 kyu: The Hastag Generator", () => {
  test("Expected an empty string to return false", () => {
    expect(generateHashtag("")).toBe(false);
  });
  test("Still an empty string", () => {
    expect(generateHashtag(" ".repeat(200))).toBe(false);
  });
  test("Expected a Hashtag (#) at the beginning.", () => {
    expect(generateHashtag("Do We have A Hashtag")).toBe("#DoWeHaveAHashtag");
  });
  test("Should handle a single word.", () => {
    expect(generateHashtag("Codewars")).toBe("#Codewars");
  });
  test("Should remove spaces.", () => {
    expect(generateHashtag("Codewars Is Nice")).toBe("#CodewarsIsNice");
  });
  test("Should capitalize first letters of words", () => {
    expect(generateHashtag("Codewars is nice")).toBe("#CodewarsIsNice");
  });

  test("Should return false if the final word is longer than 140 chars.", () => {
    expect(
      generateHashtag(
        "Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat"
      )
    ).toBe(false);
  });
  test("Too long", () => {
    expect(generateHashtag("a".repeat(140))).toBe(false);
  });
});

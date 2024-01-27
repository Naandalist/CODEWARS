const generateHashtag = (str) => {
  const words = str.trim().replace(/\s+/g, " ").split(" ");

  if (words[0] === "" || words[0].length < 1) return false;

  const generatedText = words.map(
    (word) => `${word[0].toUpperCase()}${word.slice(1)}`
  );

  const finalText = `#${generatedText.join("")}`;

  return finalText.length > 140 ? false : finalText;
};

module.exports = generateHashtag;

const onlyDuplicates = (str) => {
  const charCount = {};
  for (let i = 0; i < str.length; i++) {
    charCount[str[i]] = (charCount[str[i]] || 0) + 1;
  }

  let result = "";
  for (let j = 0; j < str.length; j++) {
    if (charCount[str[j]] > 1) {
      result += str[j];
    }
  }
  return result;
};

module.exports = onlyDuplicates;

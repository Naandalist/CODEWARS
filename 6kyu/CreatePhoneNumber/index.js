const createPhoneNumber = (numbs) => {
  let result = "(xxx) xxx-xxxx";

  for (const e of numbs) {
    result = result.replace("x", e);
  }
  return result;
};

module.exports = createPhoneNumber;

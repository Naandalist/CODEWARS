const howMuchILoveYou = (nbPetals) => {
  const list = {
    1: "I love you",
    2: "a little",
    3: "a lot",
    4: "passionately",
    5: "madly",
    6: "not at all",
  };
  return list[((nbPetals - 1) % 6) + 1];
};

module.exports = howMuchILoveYou;

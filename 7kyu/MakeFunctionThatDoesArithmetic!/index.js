const arithmetic = (a, b, operator) => {
  const operatorList = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b,
  };

  return operatorList[operator](a, b);
};

module.exports = arithmetic;

const descendingOrder = (n) =>
  Number(
    n
      .toString()
      .split("")
      .sort((a, b) => b - a)
      .join("")
  );

module.exports = descendingOrder;

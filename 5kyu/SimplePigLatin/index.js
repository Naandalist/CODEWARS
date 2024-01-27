const pigIt = (str) => {
  var arr = str.split(" ");
  var newArr = [];
  var temp = "";

  for (var i = 0; i < arr.length; i++) {
    for (var j = 1; j < arr[i].length; j++) {
      temp += arr[i][j];
    }
    newArr.push(temp + arr[i][0] + "ay");
    temp = "";
  }
  var arrResult = [];

  for (var k = 0; k < newArr.length; k++) {
    if (newArr[k] == "?ay" || newArr[k] == "!ay") {
      newArr[k] = newArr[k][newArr[k].length - 3];
    }
    arrResult.push(newArr[k]);
  }

  return arrResult.join(" ");
};

module.exports = pigIt;

//Listiananda Apriliawan
//Shortest Words


//Task: https://www.codewars.com/kata/shortest-word/train/javascript

//Simple, given a string of words, return the length of the shortest word(s).
//String will never be empty and you do not need to account for different data types.


  const findShort = (stn) => {
    let result = 10000;
    for (e of stn.split(' ')){
      if (result > e.length){result= e.length}
    }
    return result;
  }



//example:
/*
findShort("bitcoin take over the world maybe who knows perhaps") //Output: 3
findShort("turns out random test cases are easier than writing out basic ones") //Output: 3

*/

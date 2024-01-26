//Listiananda Apriliawan
//Find the Odd int


/* Task : https://www.codewars.com/kata/find-the-odd-int/train/javascript

  Given an array, find the int that appears an odd number of times.
  There will always be only one integer that appears an odd number of times.
*/


 const doTest = (array) => {

   let frequency = {}, value;

     // compute frequencies of each value
   for(let i = 0; i < array.length; i++) {
        value = array[i];
        if(value in frequency) {
            frequency[value]++;
        }
        else {
            frequency[value] = 1;
        }
    }

    let uniques = [];

    // make array from the frequency object to de-duplicate
    for(value in frequency) {
        uniques.push(value);
    }

    //get the number which has odd freq
    for (e of uniques){
      if (frequency[e] %2 !== 0){
        return Number(e)
      }
    }
 };



 //  doTest([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]) // 5
 //   doTest([1,1,2,-2,5,2,4,4,-1,-2,5]) // -1
    doTest([20,1,1,2,2,3,3,5,5,4,20,4,5]) // 5
 //   doTest([10]) //, 10
 //   doTest([1,1,1,1,1,1,10,1,1,1,1]) // 10
 //   doTest([5,4,3,2,1,5,4,3,2,10,10]) // 1

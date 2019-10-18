//Listiananda Apriliawan
//Beginner - Lost Without a Map

/* Task:
    Given an array of integers, return a new array with each value doubled.
*/

function maps(x){
    let arrx = [];
      for (let i=0; i< x.length; i++){
          arrx.push(x[i] + x[i]);
      }
      return arrx;
  }


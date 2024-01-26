//Listiananda Apriliawan
//Moving Zeros to End

/*Task: https://www.codewars.com/kata/52597aa56021e91c93000cb0/solutions/javascript

   Write an algorithm that takes an array and moves all of the zeros to the end,
   preserving the order of the other elements.

   example:
   moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/

  //before refactor
  const moveZeros = (array) => {
  const zeros=[], notZeros=[]
  for ([i, e] of array.entries()){
    if (e === 0){
      zeros.push(e)
    } else {
      notZeros.push(e)
    }
  }
  return [...notZeros, ...zeros]
  }

  //after refactor  
  const moveZeros = (array) => {
    const result=[]
    for ([i, e] of array.entries()){
      if (e === 0){
        array.splice(i, 1)
        array.push(0)
      }
    }
    return array;
  }
  moveZeros([1,2,0,1,0,1,0,3,0,1])
  //[ 1, 2, 1, 1, 3, 1, 0, 0, 0, 0 ]

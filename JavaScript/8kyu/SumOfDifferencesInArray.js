//Listiananda Apriliawan
//Sum of differences in array

/* Task:
Your task is to sum the differences between consecutive pairs in the array in descending order.
If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell).
*/

function sumOfDifferences(array){
   
    if (array.length < 2) return 0

    array.sort((a,b)=> a - b)
    console.log('max value: '+array[array.length-1])
    console.log('min value: '+array[0])
    
    return array[array.length-1]-array[0]
 
  }
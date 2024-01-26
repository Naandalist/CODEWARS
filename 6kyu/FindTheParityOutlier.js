//Listiananda Apriliawan
//Find the Parity Outlier

/* Task: https://www.codewars.com/kata/5526fc09a1bbd946250002dc/solutions/javascript

 You are given an array (which will have a length of at least 3, but could be very large) containing integers.
 The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N.
 Write a method that takes the array as an argument and returns this "outlier" N.

*/

  const findOutlier = (arr) =>{
    let odd=[], even=[]
    for (e of arr){
      e % 2 === 0 ? even.push(e) : odd.push(e)
    }
    return even.length < odd.length ? result = even[0] : result = odd[0]
  }

  findOutlier([0, 1, 2]) // 1
  // findOutlier([1, 2, 3]) // 2
  // findOutlier([2,6,8,10,3]) // 3
  // findOutlier([0,0,3,0,0]) // 3
  // findOutlier([1,1,0,1,1]) // 0

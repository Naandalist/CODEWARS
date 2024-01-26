//Listiananda Apriliawan
//Create Phone Number

/* Task: https://www.codewars.com/kata/create-phone-number/train/javascript

  Write a function that accepts an array of 10 integers (between 0 and 9),
  that returns a string of those numbers in the form of a phone number.

  Example:
  createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

*/

  //use splice
  const createPhoneNumber = (numbs) => {
    numbs.splice(0, 0, '(')
    numbs.splice(4, 0, ')')
    numbs.splice(5, 0, ' ')
    numbs.splice(9, 0, '-')
    return numbs.join('')
  }

  //use replace
  const createPhoneNumber = (numbs) => {
    let result= '(xxx) xxx-xxxx';

    for (const e of numbs){
      result= result.replace('x', e)
    }
    return result;
  }


  //createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // "(123) 456-7890")
  // createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]) // "(111) 111-1111")
  createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // "(123) 456-7890")

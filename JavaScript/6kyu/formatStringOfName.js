//Listiananda Apriliawan
//Two Sum

// Given: an array containing hashes of names
//
// Return: a string formatted as a list of names separated by commas except for the last two names,
// which should be separated by an ampersand.

/*
Task: https://www.codewars.com/kata/format-a-string-of-names-like-bart-lisa-and-maggie/train/javascript
Example:

    list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
    // returns 'Bart, Lisa & Maggie'

    list([ {name: 'Bart'}, {name: 'Lisa'} ])
    // returns 'Bart & Lisa'

    list([ {name: 'Bart'} ])
    // returns 'Bart'

    list([])
    // returns ''
*/

const = list(obj) => {
    const arr=[]
    obj.forEach((e, i) => {
      if (obj.length >= 2){
        if (i === obj.length-1){
        arr.push(`& ${e.name}`)
        }
        else if (i === obj.length-2){
          arr.push(`${e.name}`)
        }
        else{
          arr.push(`${e.name},`)
        }
      }
      else {
        arr.push(`${e.name}`)
      }
  });
  return arr.join(' ');
}

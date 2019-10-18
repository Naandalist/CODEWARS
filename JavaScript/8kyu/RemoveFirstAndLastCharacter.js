//Listiananda Apriliawan
//Remove First and Last Character

/* Task:
It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string.
You're given one parameter, the original string.
You don't have to worry with strings with less than two characters.
*/

const removeChar = (str) => {
    const result=[]
    for (let i=0; i< str.length; i++){
      if (i !== 0 && i !== str.length-1){
        result.push(str[i])
      }
    }
    return result.join('')
  }
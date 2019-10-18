//Listiananda Apriliawan
//Remove String Spaces

/*Task:
Simple, remove the spaces from the string, then return the resultant string.
It's arrow function.
*/

const noSpace = (str) => {
    const result=[]
    for (let i=0; i< str.split('').length; i++ ){
      if (str.split('')[i] !== ' '){
        result.push(str.split('')[i])
      }
    }
    return result.join('');
  }
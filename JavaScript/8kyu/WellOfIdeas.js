//Listiananda Apriliawan
//Well of Ideas - Easy Version

/*Task:
In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'.
If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'.
If there are no good ideas, as is often the case, return 'Fail!'.
*/

function well(x){
    let arr=[]
    
    for (let i=0; i<x.length; i++){
      if (x[i] === 'good'){
        arr.push(x[i])
      }
    }
    if ((arr.length >0) && (arr.length < 3)){
      return 'Publish!'
    }
    if (arr.length >2){
      return 'I smell a series!'
    }
    else{
      return 'Fail!'
    }
  }
//Listiananda Apriliawan
//Highest and Lowest

/* Task:
In this little assignment you are given a string of space separated numbers,
and have to return the highest and lowest number.
*/

function highAndLow(numbers){
    var arr =numbers.split(" ");
    arrNum=[];

    for (var i=0; i< arr.length; i++){
        arrNum.push(Number(arr[i]));
    }
    arrNum.sort(function(val1, val2) { return val1 - val2})
    return arrNum[arrNum.length-1]+" "+arrNum[0]    
  }
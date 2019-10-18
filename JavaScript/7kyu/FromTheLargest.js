//Listiananda Apriliawan
//From The Largest

/*Task:
Given a number , Return _The Maximum number _ could be formed from the digits of the number given .
*/

function maxNumber(n){
  
    var arr=[];
    for (var i=0; i< String(n).length; i++){
      arr.push(String(n)[i]);
    }
    arr.sort(function (a, b){return b - a });
    
    var result="";
    for (var j=0; j< arr.length; j++){
      result +=arr[j];
    }
    return Number(result);
  }



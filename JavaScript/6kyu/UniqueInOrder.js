//Listiananda Apriliawan
//Unique in Order

/*Task:
Implement the function unique_in_order which takes as argument a sequence 
and returns a list of items without any elements with the same value next to each other 
and preserving the original order of elements.
*/

var uniqueInOrder=function(iterable){
    var arr=[];
    var temp="";
    for (var i=0; i< iterable.length; i++){
      if (iterable[i] != temp){
        temp = iterable[i];
        arr.push(temp);
      }
    }
   return arr; 
}
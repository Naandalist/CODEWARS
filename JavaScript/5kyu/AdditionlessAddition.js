//Listiananda Apriliawan
//Additionless Addition

/* Task:
Create an addition function that does not utilize the + or - operators.

Anti-cheat tests
You may not use any of these symbols: +-[].'"`

Note: Moreover, Math, Array, eval, new Function, with and such have been disabled.
*/

function add (x, y) {
    if (y == 0) {
       return x;
   } else {
       return add(x ^ y, (x & y) << 1)
   }
}
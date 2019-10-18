//Listiananda Apriliawan
//Counting sheep

/* Task:
Consider an array of sheep where some sheep may be missing from their place.
We need a function that counts the number of sheep present in the array (true means present).
*/

function countSheeps(arrayOfSheep) {
    let tampung =[]
    const wrap = arrayOfSheep.filter((items) => {
     
     if (items == true ) return tampung.push(items)
     
    })
    return wrap.length
}

const arrays = [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true ];

console.log(countTrue(arrays)) //17
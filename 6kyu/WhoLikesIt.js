//Listiananda Apriliawan
//WHo Likes it?

/*Task: https://www.codewars.com/kata/who-likes-it/train/javascript

 You probably know the "like" system from Facebook and other pages.
 People can "like" blog posts, pictures or other items.
 We want to create the text that should be displayed next to such an item.

 Implement a function likes :: [String] -> String, which must take in input array,
 containing the names of people who like an item. It must return the display text as shown in the examples:
*/

  //examples:
    // likes [] // must be "no one likes this"
    // likes ["Peter"] // must be "Peter likes this"
    // likes ["Jacob", "Alex"] // must be "Jacob and Alex like this"
    // likes ["Max", "John", "Mark"] // must be "Max, John and Mark like this"
    // likes ["Alex", "Jacob", "Mark", "Max"] // must be "Alex, Jacob and 2 others like this"

    //note: For 4 or more names, the number in and 2 others simply increases.


//use switch case
  const Likes =(arr) => {

    let result ='';
    switch (arr.length){
      case 0:
        result = `no one likes this`;
        break;
      case 1:
        result = `${arr[0]} likes this`;
        break;
      case 2:
        result = `${arr[0]} and ${arr[1]} like this`;
        break;
      case 3:
        result = `${arr[0]}, ${arr[1]} and ${arr[2]} like this}`;
        break;
      default:
        result = `${arr[0]}, ${arr[1]} and ${arr.length-2} others like this`
    }
    return result;
  }

  //use if-else
  const Likes =(arr) => {
    if (arr.length < 1)return 'no one likes this';
    if (arr.length === 1) return `${arr[0]} likes this`
    if (arr.length === 2) return `${arr[0]} and ${arr[1]} like this`
    if (arr.length === 3) return `${arr[0]}, ${arr[1]} and ${arr[2]} like this}`
    if (arr.length > 3 ) return `${arr[0]}, ${arr[1]} and ${arr.length-2} others like this`
  }
  

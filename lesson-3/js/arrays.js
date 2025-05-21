const output = document.querySelector('body p:nth-of-type(2)');
let arr1 =[];
console.log(typeof(arr1));

//Sparse arrays
let arr2=[1,2,3];
arr2.push(4);
console.log(arr2.length);
console.log(arr2[1]);

//array methods:.map(),.reduce(),.find(),.flat()
let nested = [1,[2,[3,4]]];
console.log(nested.flat(2));

//.map():transforms eaxh item in an array
let numbers = [1,2,3,4];
//Double each number
let doubled = numbers.map(num => num *2);
console.log(doubled);

let roots = doubled.map(num => Math.sqrt(num));
console.log(roots);

//.filter()
let numbers2 = [1,2,3,4,5];
let even = numbers2.filter(num => num%2 === 0);
console.log(even);

//Arrays can have holes

let arr3 =[];
arr3[5] = "Hello";
console.log(arr3.length);
/* STEP 1: Creating an array
When declaring and initializing an array, you can include strings, numbers, booleans, and even other arrays */

/* STEP 2: Reading and changing array elements
You can refer to a particular element in an array with it's index number */

// You can also change a particular element

// An array within an array is called a multidimensional array - it can be accessed by specifying the index of the first array, then the item within it
/* STEP 3: Determining array length
Being able to figure out how many elements are contained in an array is a critical feature of JavaScript programming */

// In particular, looping through arrays

/* STEP 4: Convert a string to an array
If there is a common character that can act as a delimiter in a string, we can use this character to create an array */

// Output one of the array items

// Output the last element of the array

/* STEP 5: Convert an array back to a string
Use join() and toString() - note that join() allows you to choose and insert a delimiter, while toString() does not */

/* STEP 6: Adding and removing items from an array
Without the ability to edit the contents of an array, this type of variable would have limited use - but adding and removing array items is pretty straightforward */

// Adding one or more items to an array with push()

// If you would like to capture how many elements are in the array after you have edited it, then…

// Removing an item from an array with pop()

// pop() returns the item that was removed, rather than the length of the updated array, so…

// To do the same thing, that is, to add and remove an item from the beginning of the array, use shift() and unshift()

// We can also modify the array contents by deleting or substituting elements, or inserting one or more elements at a certain place with splice()

/* That's it for the basics of working with arrays! With these tools at your disposal, a whole new world of possibilities with JavaScript are at your command */
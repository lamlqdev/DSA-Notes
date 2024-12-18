// 1. Adding/Removing Elements

// push() - Adds one or more elements to the end of an array and returns the new length.
let arr = [1, 2];
arr.push(3); // arr becomes [1, 2, 3]

// pop() - Removes the last element from an array and returns it.
let arr = [1, 2, 3];
arr.pop(); // arr becomes [1, 2], returns 3

// shift() - Removes the first element from an array and returns it.
let arr = [1, 2, 3];
arr.shift(); // arr becomes [2, 3], returns 1

// unshift() - Adds one or more elements to the beginning of an array and returns the new length.
let arr = [2, 3];
arr.unshift(0, 1); // arr becomes [0, 1, 2, 3]

// splice() - Adds or removes elements from an array at a specified index.
let arr = [1, 2, 3, 4];
arr.splice(2, 1, 'a', 'b'); // arr becomes [1, 2, 'a', 'b', 4]

// concat() - Combines multiple arrays into one new array.
let arr1 = [1, 2];
let arr2 = [3, 4];
let combined = arr1.concat(arr2); // arr1 remains [1, 2], arr2 remains [3, 4], combined is [1, 2, 3, 4]


// 2. Transforming Elements

// map() - Creates a new array with the results of applying a function to each element.
let arr = [1, 2, 3];
let doubled = arr.map(x => x * 2); // doubled becomes [2, 4, 6]

// filter() - Creates a new array with all elements that pass a test.
let arr = [1, 2, 3, 4];
let evenNumbers = arr.filter(x => x % 2 === 0); // evenNumbers becomes [2, 4]

// reduce() - Applies a function to each element to reduce the array to a single value.
let arr = [1, 2, 3, 4];
let sum = arr.reduce((acc, curr) => acc + curr, 0); // sum becomes 10

// sort() - Sorts the elements of an array in place (alphabetically or numerically).
let arr = [3, 1, 4, 2];
arr.sort((a, b) => a - b); // arr becomes [1, 2, 3, 4]


// 3. Checking Elements

// find() - Returns the first element that satisfies a condition.
let arr = [1, 2, 3, 4];
let found = arr.find(x => x > 3); // found becomes 4

// findIndex() - Returns the index of the first element that satisfies a condition.
let arr = [1, 2, 3, 4];
let index = arr.findIndex(x => x > 3); // index becomes 3

// some() - Checks if at least one element satisfies a condition.
let arr = [1, 2, 3, 4];
let hasEven = arr.some(x => x % 2 === 0); // hasEven becomes true

// every() - Checks if all elements satisfy a condition.
let arr = [2, 4, 6];
let allEven = arr.every(x => x % 2 === 0); // allEven becomes true

// includes() - Checks if an array contains a certain element.
let arr = [1, 2, 3];
let hasTwo = arr.includes(2); // hasTwo becomes true


// 4. Iterating Through Elements

// forEach() - Executes a function for each element in the array (no return value).
let arr = ['a', 'b', 'c'];
arr.forEach((item, index) => {
  console.log(index, item);
}); 
// Output: 
// 0 a
// 1 b
// 2 c


// 5. Reversing/Flattening

// reverse() - Reverses the order of elements in the array.
let arr = [1, 2, 3];
arr.reverse(); // arr becomes [3, 2, 1]

// flat() - Flattens a nested array to a specified depth.
let arr = [1, [2, [3, 4], 5]];
let flatArr = arr.flat(2); // flatArr becomes [1, 2, 3, 4, 5]

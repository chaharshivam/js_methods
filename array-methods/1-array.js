// Arrays to work on
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6];
var strings = ["this", "is", "a", "collection", "of", "words"];

// Use the above two arrays and practice array methods

// Find largest number in numbers
let largest = (arr) => {
	let max = -Infinity;

	for (var i = 0; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i];
		}
	}

	return max;
}

console.log( largest(numbers) );

// Find longest string in strings
let longestStr = (arr) => {
	let longest = '';

	for (var i = 0; i < arr.length; i++) {
		if (arr[i].length > longest.length) {
			longest = arr[i];
		}
	}

	return longest;
}

console.log( longestStr(strings) );

// Find all the even numbers
let evens = (arr) => arr.filter( (n) => !(n & 1) );

console.log( evens(numbers) );
// Find all the odd numbers

let odds = (arr) => arr.filter( (n) => (n & 1) );

console.log( odds(numbers) );
// Find all the words that contain 'is' use string method 'includes'

let containsIs = (arr) => arr.filter( (str) => ( str.includes('is') ) );

console.log( containsIs(strings) );
// Find all the words that contain 'is' use string method 'indexOf'

let containsIsAlt = (arr) => arr.filter( (str) => str.indexOf('is') != -1 );

console.log( containsIsAlt(strings) );

// Check if all the numbers in numbers array are divisible by three use array method (every)
let divByThree = (arr) => arr.every( (num) => num % 3 == 0);
console.log( divByThree(numbers) );

//  Sort Array from smallest to largest
let sortedArr = (arr) => arr.sort( (a, b) => a - b );

console.log( sortedArr(numbers) );

// Remove the last word in strings

let removeLast = (arr) => arr.pop();

console.log( removeLast(strings) );
console.log(strings);
// Add a new word in the array

let addElement = (arr, element) => arr.push(element);

console.log( addElement(strings, 'strings') );
console.log(strings);
// Remove the first word in the array

let removeFirstSlice = (arr) => arr.slice(1);

let removeFirstShift = (arr) => arr.shift();

let removeFirstSplice = (arr) => arr.splice(0, 1);

console.log( removeFirstSlice(strings) );
console.log( removeFirstShift(strings) );
console.log( removeFirstSplice(strings) );

// Place a new word at the start of the array use (upshift)

let addStart = (arr, element) => arr.unshift(element);

console.log( addStart(strings, 'Here') );
console.log(strings);

// Make a subset of numbers array [18,9,7,11]
let subset = (arr, start, end) => arr.slice(start, end);

console.log( (subset(numbers, 3, 7)) );

// Make a subset of strings array ['a','collection']
console.log( subset(strings, 2, 4) );

// Replace 12 & 18 with 1221 and 1881

let replace = (arr, oldElement, newElement) => {
	
	if (arr.indexOf(oldElement) != -1) {
		arr[ arr.indexOf(oldElement) ] = newElement;
	}

	return arr;
}

console.log( replace(numbers, 12, 1221) );
console.log( replace(numbers, 18, 1881) );

// Replace words with string in strings array

console.log( replace(strings, 'words', 'strings') );

// Customers Array
var customers = [
  { firstname: "Joe", lastname: "Blogs" },
  { firstname: "John", lastname: "Smith" },
  { firstname: "Dave", lastname: "Jones" },
  { firstname: "Jack", lastname: "White" }
];
// Find all customers whose firstname starts with 'J'

let findCustomers = (arr, start) => arr.filter( (obj) => obj.firstname[0] === start);

console.log( findCustomers(customers, 'J') );
// Create new array with firstname and lastname

let newArray = (arr) => arr.map( (elm) => elm);

console.log( newArray(customers) );
// Sort the array created above alphabetically

let compare = (a, b) => {
	let length = (a.firstname.length < b.firstname.length) ? a.firstname.length : b.firstname.length;
	// first check with first name
	for (var i = 0; i < length; ++i) {
		if (a.firstname.charCodeAt(i) != b.firstname.charCodeAt(i)) {
			return a.firstname.charCodeAt(i) - b.firstname.charCodeAt(i);
		} 
	}

	// check with lastname if firstname is same
	length = (a.lastname.length < b.lastname.length) ? a.lastname.length : b.lastname.length;

	for (var i = 0; i < length; ++i) {
		if (a.lastname.charCodeAt(i) != b.lastname.charCodeAt(i)) {
			return a.lastname.charCodeAt(i) - b.lastname.charCodeAt(i);
		} 
	}

	return -1;
}

let sortAlpha = (arr) => arr.sort( compare );

// push to verify sorting by lastname
customers.push({firstname: 'Dave', lastname: 'Zones'});

// before sort
console.log(customers);
// after sort
console.log( sortAlpha( newArray(customers) ) );
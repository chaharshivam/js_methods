var words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot'
];
//Write a function findLongestWord that takes an array of words and returns the longest one.
//If there are 2 with the same length, it should return the first occurrence.
let findLongestWord = (arr) => {
  let longest = '';

  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length > longest.length) {
      longest = arr[i];
    }
  }

  return longest;
}

console.log( findLongestWord(words) );



var numbers1 = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
// Create a sumArray function that takes an array of numbers1 as a parameter, and calculate the sum of all its numbers
// Use reduce method of array
// Use the above sum and calculate the average.

let sumArray = (arr) => arr.reduce((s, num) => s+num);

console.log( sumArray(numbers1) );


var numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];
//Write a function averageNumbers that receives an array of numbers2 and calculate the average of the numbers

console.log( sumArray(numbers2)/numbers2.length );


var words2 = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace'
];
//Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.

let averageWordLength = (arr) => {
  let sum = 0;

  arr.forEach( (word) => {
    sum += word.length;
  })

  return sum/arr.length;
}

console.log( averageWordLength(words2) );
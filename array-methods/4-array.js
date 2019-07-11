var data = [
  {
    name: 'Butters',
    age: 3,
    type: 'dog'
  },
  {
    name: 'Lizzy',
    age: 6,
    type: 'dog'
  },
  {
    name: 'Red',
    age: 1,
    type: 'cat'
  },
  {
    name: 'Joey',
    age: 3,
    type: 'dog'
  },
   {
    name: 'Pochi',
    age: 3,
    type: 'dog'
  }
];

// write a function that will sum all of the dogs ages in dog years using for loop.
// 1 human year = 7 dog year
// Solution is 105

let totalAge = (data) => data.reduce( (s, currentValue) => {
  if (typeof s == 'object') {
    s = s.age;
  }
  if (currentValue.type == 'cat') {
    return s;
  }
  
  return s + currentValue.age;
}); 

console.log( 7 * totalAge(data) );
// Write the same function using
// 1. filter - for filtering the cat or dog

let filterAnimal = (data, type) => data.filter( (animal) => animal.type == type);

console.log(filterAnimal(data, 'cat'));
console.log(filterAnimal(data, 'dog'));

// 2. map - to multiply human year to dog year

let humanYear = (data) => data.map( (animal) => {
  
  return (animal.type == 'dog') ? {name: animal.name, age: 7*animal.age, type: 'dog'}: animal;
  
});

console.log( humanYear(data) );
// 3. reduce - to accumulate total age.
// Solution 105

console.log( 7 * totalAge(data) );
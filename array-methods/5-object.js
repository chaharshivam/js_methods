// 1. Write a JavaScript program to list the properties and values of a JavaScript object. (Object.keys)

let listObjects = (obj) => {
	for (let key in obj) {
		console.log(`${key} : ${obj[key]}`);
	}
}

// 2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
var student = { 
  name : "David Rayy", 
  sclass : "VI", 
  rollno : 12
};

listObjects(student);

let deleteKey = (obj, key) => {
	delete obj[key];
}

deleteKey(student, 'rollno');

listObjects(student);
// 3. Write a function to get the length of an object.

let getObjLength = (obj) => {
  let length = 0;
  for (let key in obj) {
    length++;
  }

  return length;
}

console.log(getObjLength(student));
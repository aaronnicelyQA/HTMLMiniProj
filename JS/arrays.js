'use strict';

//Arrays = storing data, like lists with smoe differences
//Ability to store primitive data types


//Method 1: 
let array1 = Array(); //array with no data
console.log(array1);


//Method 2: Array with specified size
let arrayWithSize = Array(10);
    console.log(arrayWithSize);


///Method 3: Array with values
let people = Array("Rob", "Bob", "Tom");
console.log(arrayWithValues);

//Method 4: Preferred method/best practice
let arrayBestPractice = ["aaron", "Field2", "Field3"];
console.log(arrayBestPractice);

//You can store different data types in an array in JS
let arrayDataTypes = ["Aaron", true, 14, { hobbies: "eating" }];
console.log(arrayDataTypes);

let classroom = Array(5);
classroom[0] = "Someone";
classroom[2] = "Who";
classroom[3] = "Is";
classroom[4] = "Important";
console.log(classroom);

//Iterates through the Array
for (let i = 0; i < classroom.length; i++) {

    console.log(classroom[i]);
}

let frutis = [];
fruits[0] = "Apple";
fruits[1] = "Pear";
fruits[2] = "Banana";
fruits[3] = "Starberries";
fruits[4] = "Tomato";

console.log(fruits);
//push() - adds to the END of the array
fruits.push("Pineapple");
console.log(fruits);

//pop() - remove LAST element from my array
fruits.pop();
console.log(fruits);

// unshift() - adds to the START of the array
fruits.unshift("Pineapple");
console.log(fruits);

//shift() remove from the Start of the array
fruits.shift()
console.log(fruits);

let removeME = fruits.indexof(3);
fruits.splice(removeME-1, removeME);
console.log(frutis);
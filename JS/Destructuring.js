'use strict'

//Destructing = extracting data from objects and arrays

let variable1, variable2, variable3;

[variable1, variable2, variable3] = ["I", "Love", "JS"];

console.log(variable1); //I 
console.log(variable2); //Love
console.log(variable3); //JS


//Destructuring an object
let myobject = {var6: "salt", var7: "Pepper"};
let {var6, var7} = myobject;

console.log(var6); //salt)
console.log(var7); //pepper)

console.log(myobject.var6); //salt
console.log(myobject.var7); //pepper

//renaming deconstructed variables 
let {var6: condiment1, var7: condiment2} = myObject;

console.log(condiment1);
console.log(condiment2);


// ... is the spread operator, collates values together and is stored in an [] array
const myArray = [1,2,3,4,5,6,7,7,4,3,222,221];
//to skip over values, usa a " , " in its place
const [a,b,c,...rest] = myArray;

console.log(a);
console.log(b);
console.log(c);
console.log(rest);

// const person = {

//     name:"Chris",
//     middle"Peter",
//     last:"Bacon",
//     city:"London",
//     country:"UK",
// }

let {first, middle, last, gender="Male"} = person;
console.log;(`Your human is called: ${first} ${middle} ${last}. Gender: ${gender}` )

// we use default if it doesnt exist in the object
// if it does exist, use the object value, not the default value.

//default values
const rgb = [200];
const[red=255, green, blue=255] = rgb;
console.log(`${red},${green},${blue},`); //255,200,255

let red = 100;
let green = 200;
let blue = 50;
const rgb = [200,255,100];
[red,green] = rgb;
console.log (`${red},${green},${blue},`);
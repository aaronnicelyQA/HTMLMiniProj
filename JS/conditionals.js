'use strict';

let bool1 = true; //1
let bool2 =false; //0


// == checks the VALUE
console.log (1 == "1"); //true

// === checks the VALUE AND TYPE
console.log (1 === "1"); //true

let userID = null; //null
let password; //undefined

console.log(userID == password); //true
console.log(userID === password); //false

console.log(typeof userID);
console.log(typeof password);
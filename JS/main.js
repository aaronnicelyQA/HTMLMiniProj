//print something to the screen
 
console.log("Hello Friends");
console.error("Error");
console.warn("Warning");
console.info("Information log");

//No such thing as declaring a variable as a specific type
//In Javascript there is LET, CONST, VAR(try not to use var)

let aar = "Aaron"; 
let ten = 10; 
let hello = false; 
let float = 2.4; 

console.log(typeof aar); //string
console.log(typeof ten); //number
console.log(typeof hello); //boolean
console.log(typeof float); //number

//CONST = constanant meaning it can't be changed

const year = 2021;
//year = 2022: CANNOT DO THIS

let year2 = 2020;
year2 = 2021;
console.log(year2);

//null= explicit keyword thst tells the runtime that its null
let variable = null;
console.log(variable); //null, undefined, warning

// String concatenation
let str1 = "5 + 3 =";
let value = 5+3;
let str2 = str1 + value;
console.log(str2);

//template literals - immediately evaluates exoressions
let result = `5 + 3= ${5+3} `;

//Data Types
// Number = integer, floating point, limited +253
// String = "any text"
// boolean = true/fales
// null = unkown values/runtime empty
// undefined = value is not assigned
// object = store collections of data 

let myNumber = 20;
let myString = "Quotes can be freely used"
let myBool = true;
let myAge = null;
let dob;
let myObject = {key:"value", key2:"value2", key3:"value3"};

console.log(myString);
console.log(myObject);

//Javascript - youre free to change the datatype of
//a variable at any given time

let number; //undefined
console.log(typeof number);
number = 1234; //number
console.log(typeof number);
number = true; //boolean
console.log(typeof number);
number ="Something"; //String
console.log(typeof number);



//ASI - automatic semicolon insertion happens when
//1. Two lines are seperated by a line terminator
//2. When two statement are separated by a 
//closing brace
//3. Line terminator follows a BREAK, 
//RETURN, THROW or CONTINUE
const HELLO = "Aaron says hi";
console.log(HELLO);

let a = 20;

//return 2*a+1;

// let foo;
// BarProp;
// console.log(foo);
// console.log(bar);

// let a;
// b=3;

console.log("Aaron");
console.info("Nicely");
console.warn("Coventry");
console.error("Cancer");



//Create a console log using CSS properties
let myTxt=("Beginner Javascript")
;console.log("This is now %c The end of the exercises."+myTxt,"color: orange;font-family:fantasy; font-style: Bold; background-color: black;padding: 10px");


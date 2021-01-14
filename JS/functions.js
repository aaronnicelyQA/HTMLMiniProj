//function is reusable code we can use mutliple times
//performs a particular task or do something
//to do something it has to be called
// stops duplication of code

function add(){
    return 1+2;
}

function addit(number1, number2){
    return number1+number2;
}

//function expression
const addition = function(num1, num2){
    return num1+num2;
}

//arrow function 
const additionarrow = (no1, no2) =>no1+no2;

const stringconcat = (userinput) => `you said ${userinput}`;

console.log(addition(12,2));
console.log(additionarrow(34,4));

const userinput = prompt("Enter smoething.."); 
console.log(stringconcat(userinput));

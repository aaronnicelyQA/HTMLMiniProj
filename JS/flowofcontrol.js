//while loop
//for loop
//do while loop
//switch case

// for( [inital - expession]; [condition]; iterator) {

//     statement
// }

'use strict';

for (let i = 0; i < 10; i++) {

    console.log(i);

}

//do while = executes at least once before checking cnodition
//while = checks first then runs

let x = 0;
let canIrun = false;

//do while
do {
    x++;
    console.log(x);

} while (canIrun);

// while(condition){
//     statement;
// }



//while
let pups = 0;
let notEnoughPups = true;

while (notEnoughPups) {

    console.log("another one..");
    pups++;

    if (pups > 5) {
        notEnoughPups = false;
    }

}

//switch case

// switch (expression) {

//     case 0:
//         statement;
//     case 1:
//         statement;
// }

// let day = "Monday";

// switch(day){
// case "Sunday":
//     console.log("It is Sunday");
//     break

//     case "Monday":
//     console.log("It is Monday");
//     break
    
//     case "Tuesday":
//     console.log("It is Tuesday");
    
//     case "Wednesday":
//     console.log("It is Wednesday ");
//     break
//     default: console.log("The day isnt here);


// }

//Iterators
let x = 1;
x++;
console.log(x); //1

//prints x first before increasing it by 1 

let y = 1;
++y;
console.log(y); //2

//increases then adds y
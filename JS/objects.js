'use strict';
//accessed the object() class (METHOD 1)
let student = new Object();

student.name = "Aaron";
student["id"] = 123;
// student.name -="Azza"; //Not Best practice to override objects 



//Method 2 (both print same result and mean the same thing)
let students = {} // {} = empt object


console.log(student);
console.log(students);

const classroom = [

    { name: "aaron", id: 1423, courseCode: "JSFUND" },
    { name: "Bob", id: 1233, courseCode: "JSFUND" },
    { name: "Tom", id: 1213, courseCode: "JSFUND" },
    { name: "Sam", id: 13, courseCode: "JSFUND" },
    { name: "Jordan", id: 124, courseCode: "JSFUND" },

]

for (let i = 0; i < classroom.length; i++) {

    console.log('the current index is: ${i}, ${classroom[i]}');
    for (let key in classroom[i]) {

        console.log('Key: ${classroom[i][key]}');

    }
}

//JSON

let myJSOBObject = {
"Users": [ 
    {"username": "jimbob123", "password": "hello123"},
    {"username": "bobjim123", "password": "123hello"},
]
}

let strObj = `{"name":"sav"}`;
console.log(typeof strObj);

let obj = JSON.parse(strObj);
console.log(typeof obj);


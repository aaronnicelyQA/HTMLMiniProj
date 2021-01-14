function someFunction(){

    let hello = "billy bob joe";
    console.log(hello, "called from the function");
}

someFunction();
console.log(hello); //hello is NOT defined here

let check = false;

function changeCheck(){

    check = true;
}

console.log(check); //false
changeCheck();
console.log(check); //true 

function test(){
    flag = true;
    alert(flag);
    test1();
    alert(flag);

}

function test1(){
    flag=false;
    return;


   
}


test();

function test(){
    flag = true;
    alert(flag);
    test1();
    alert(flag);

}
function test1(){
    let flag = false;
    return;
}

test();

//With scope you always look inside before you go elsewhere
function sayMyName(){
    console.log("A");
    console.log("D");
    console.log("I");
    console.log("T");
    console.log("Y");
    console.log("A");
}

//sayMyName --> FUNCTION REFERENCE
//sayMyName() --> FUNCTION EXECUTION

sayMyName()

function addTwoNumbers(number1,number2){//parameters
    console.log(number1+number2);
}

addTwoNumbers()//returns NaN as no argument is passed
addTwoNumbers(4,3)//returns 7 // arguments 

// function addTwoNumbers(number1,number2){
//     console.log(number1+number2);
// }

const result = addTwoNumbers(3,5)

console.log(result);// returns - undefined

function addTwoNumbers(number1,number2){
    
    let result = number1+number2;
    return result
    console.log("code");//unreachable code as nothing executes after return
}

function loginUserMessage(username){
    return `${username} just logged in`
}

console.log(loginUserMessage("suhu"));
console.log(loginUserMessage());//when u don't pass anything the output will be "undefined just logged in" 

//immediately invoked function expressions --> IIFE
// function chai(){
//     console.log("DB CONNECTED");
// }
//chai()// normal function

(function chai(){
    console.log("DB CONNECTED");
})();//use terminator to end function // ---------> named IIFE

// first parenthesis is for function wrapping and second parenthesis is for execution
// IIFE is used to remove global scope pollution
(() => {
    console.log("DB CONNECTED TWO");
})() // using unnamed arrow function. // unnamed IIFE

((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})("hitesh") // using parameter 

//when we create two IIFE use statement terminator
 
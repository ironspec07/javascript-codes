const user = {
    username: "aditya",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to our wensite `);
    }
}

//this --> keyword is used to define current context

console.log(this); // in node environment returns --> {} but 
// in browser it returns some window

function chai(){
    console.log(this);
}
chai()//this gives various values 

const chai = () => { // arrow function
    console.log(this);
}
 
// const addTwo = (num1,num2) => {
//     return num1+num2       <-------------  basic arrow function
// }

//const addTwo = (num1,num2) => num1+num2  //implicit return  
//const addTwo = (num1,num2) => (num1+num2)  //implicit return  

// if we use curly braces then return keyword is mandatory otherwise no need to write return keyword.
const addTwo = (num1,num2) => ({username:"aditya"})  //to return a object  

console.log(addTwo(3,4));

const myArray = [2,3,4,5,8,10]

myArray.forEach(() => {}) // to print element of array




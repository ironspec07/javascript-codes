//********************NUMBERS********************//
const score = 400//here javaScript is detecting number data type 
const balance = new Number(10000)//here we are explicitly telling js to take only number input in this variable
console.log(balance.toString());//converts number to string
console.log(balance.toFixed(2));//prints number upto two decimal values here it will print 10000.00
const num = 123.45
console.log(num.toPrecision(4));//Number of significant digits Must be in the range 1 - 21, inclusive.Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits. in this case it returns 123.5
console.log(balance.toLocaleString(en-IN));//inserts comma between 0's for better readability

//********************MATHS********************//
// Math.abs(-4) => returns absolute value
// Math.round(4.3) => rounds off to the nearest integer
// Math.ceil(4.3) => rounds off to the integer in the right hand side in this case 5
// Math.floor(4.3) => rounds off to the integer in the left hand side in this case 4
// Math.min(2,4,5,6,11) => returns minimum between given numbers
// Math.max(2,4,5,6,11) => returns maximum between given numbers
// Math.random() => returns any value between 0 and 1 including 0 and 1.

console.log((Math.random()*10)+1);//gives value between 0 and 10 which is never 0.

const max=20
const min=10

console.log((Math.random()*(max-min+1))+min);//returns a value between a max and min number

console.log(Math.floor((Math.random()*(max-min+1))+min));//returns a integer value between a max and min number




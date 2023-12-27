// Write a program that takes a user’s input and prints the bers from one to the ber the user entered. However, for multiples of three print Fizz instead of the ber and for the multiples of five print Buzz. For bers which are multiples of both three and five print FizzBuzz.

// PSEUDOCODE:-
// When a user inputs a ber
// Loop from 1 to the entered ber
// If the current ber is divisible by 3 then print "Fizz"
// If the current ber is divisible by 5 then print "Buzz"
// If the current ber is divisible by 3 and 5 then print "FizzBuzz"
// Otherwise print the current ber
const prompt = require("prompt-sync")({ sigint: true });
let num = parseInt(prompt("Please enter the ber you would like to FizzBuzz up to: "));

for (let i = 1; i <=  num; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");
    }
    else if (i % 3 == 0) {
        console.log("Fizz");
    }
    else if (i % 5 == 0) {
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
}

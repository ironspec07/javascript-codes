//COMPARISION BETWEEN TWO DIFFERENT DATA TYPES
//never compare two different data types
console.log("2">1); //returns true
console.log("02">1); //returns true

console.log(null>0);//false
console.log(null<0);//false
console.log(null==0);//false
console.log(null<=0);//true
console.log(null>=0);//true
//equality check == and comparisions work differently .
//comparisions convert null to a number treating it as 0 therefore null<=0 or null>=0 is true and null>0 or null<0 is false

console.log(undefined==0);
console.log(undefined>0);
console.log(undefined<0);

//=== not only checks equality but also checks data type and does not converts if comparision is between two different data types
 
console.log("2"===2);//gives false
let score="77"

console.log(typeof score);//gives string output
console.log(typeof(score));//gives string output

let valueInNumber = Number(score)//connverts string score to number score.

console.log(typeof valueInNumber);//gives number output

/*
1-if string also contains alphabets along with numbers 
  then too it is converted to number but the value is NaN
2-if string also contains "null"  
  then too it is converted to number but the value is 0

3-if string also contains "undefined" 
  then too it is converted to number but the value is NaN      
*/

//"77" => 77
//"77abc" => NaN
//true => 1 ; false => 0
//undefined => NaN
//null => 0

let isLoggedIn = -10

let booleanIsLoggedIn = Boolean(isLoggedIn)//converts to boolean.

console.log(booleanIsLoggedIn);

//1 => true ; 0 => false
//"" => false
//"abcd" => true
// +/-10 => true

let someNumber = 77

let stringSomeNumber = String(someNumber)
console.log(stringSomeNumber);// gives 77 as output
console.log(typeof stringSomeNumber);//returns string 

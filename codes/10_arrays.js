//The Array object, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name, and has members for performing common array operations.

//JavaScript arrays are resizable and can contain a mix of different data types.

//JavaScript arrays are zero-indexed: the first element of an array is at index 0

//JavaScript array-copy operations create shallow copies.

//A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made. (change made in copy also change original array)

//A deep copy of an object is a copy whose properties do not share the same references

const myArr = [0, 1, 2, 3, 4, 5]
console.log(myArr[0]);//prints 1st element of array
 
const myHeros =["ironman","spiderman","doctor strange"]
//another way to declare array

const myArr2 = new Array(1,2,3,4)//another way to declare array

//ARRAY METHODS

myArr.push(6)//adds element to array

myArr.pop()//removes last value from array

myArr.unshift(9)//adds the elememt to the starting of array-> it is not recommended as we have to shift all the values of array and it is very time consuming.

myArr.shift()//removes element from the starting of array.

console.log(myArr.includes(9));//tells weather the given element is present in array or not.

console.log(myArr.indexOf(3));//tells index of given element. returns -1 if the given element os not present in array.

const newArray = myArr.join() // returns array as a string.

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)//prints the section of array and does not include the last range

console.log(myn1);
console.log("B ", myArr);//no changes in original array


const myn2 = myArr.splice(1, 3)//prints the section of array and includes the last range
console.log("C ", myArr);// array is changed and spliced section of array is deleted from original array.
console.log(myn2);

//***************MORE ABOUT ARRAYS**************//
const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
console.log(marvel_heros);//[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ] --> inserts a array inside another array.

// console.log(marvel_heros[3][1]);//to print value of a array inside another array

const allHeros = marvel_heros.concat(dc_heros)//combines both arrays 
console.log(allHeros);//[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const all_new_heros = [...marvel_heros, ...dc_heros]//spreads the value of both array
console.log(all_new_heros);//[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)//Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
console.log(real_another_array);


console.log(Array.isArray("Hitesh"))//checks weather the given value is array or not
console.log(Array.from("Hitesh"))//converts a value into array//[ 'H', 'i', 't', 'e', 's', 'h' ]
console.log(Array.from({name: "hitesh"})) // interesting--> returns a empty array[] as we have to tell that array is to be made of what keys or values

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));//Returns a new array from a set of elements.
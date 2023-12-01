const name="adii"
const repoCount=7

console.log(`hello my name is ${name.toUpperCase(
)} and my repo count is ${repoCount}`);//string interpolation// result - hello my name is ADII and my repo count is 7

const gameName = new String('antsrun')//another way to declare string by using object concept

console.log(gameName[0]);//prints key value pair of 0   i.e. a

console.log(gameName.__proto__);//to view the objects of given strings

console.log(gameName.length);//prints leangth of given strings in this case 7

console.log(gameName.toUpperCase());//no need of writing __proto__ while using prototype functions

//here original value is not effected while using the functions

console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

console.log(gameName.substring(0,4));//-ve values not allowed
console.log(gameName.slice(-7,3));//we can use -ve value to get result from backward of string

console.log(gameName.split('s'));






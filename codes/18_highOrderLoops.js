//****************************************FOR-OF LOOP**********************************//


// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num); // prints all element of arr
}

const greetings = "Hello world!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`)
}

// Maps - its holds only unique value and remembers the order 

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


 console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

for (const [key, value] of myObject) {
    console.log(key, ':-', value);
    
}//objects are not iteratable using this method i.e. forof loop does not work on objects

//****************************************FOR-IN LOOP**********************************//

const myObject2 = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject2) {
    console.log(`${key} shortcut is for ${myObject2[key]}`);
}//iteration of objects is done using forin loop

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(programming[key]);
}

const map2 = new Map()
map2.set('IN', "India")
map2.set('USA', "United States of America")
map2.set('Fr', "France")
map2.set('IN', "India")

for (const key in map) {
    console.log(key);
}

//****************************************FOR-EACH LOOP**********************************//
const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( function (val){
    console.log(val);
} )

coding.forEach( (item) => {
    console.log(item);
} )

function printMe(item){
    console.log(item);
}

coding.forEach(printMe)

coding.forEach( (item, index, arr)=> {
    console.log(item, index, arr);
} )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )


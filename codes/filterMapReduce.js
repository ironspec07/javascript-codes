//****************************************FILTER**********************************//
const coding = ["js", "ruby", "java", "python", "cpp"]


const values = coding.forEach( (item) => {
    console.log(item);
    return item
} )

console.log(values); // returns undefined 

// foreach loop does not returns value

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.filter( (num) =>  num > 4 )//in filter u have to pass and callback and a condition.
console.log(newNums);//returns [5,6,7,8,9,10]

const newNums2 = myNums.filter( (num) =>  {
    num > 4
})
console.log(newNums2);// returns empty array [] --> because by using curly braces we have started a scope and inside scope we have to use return keyword.

const newNums3 = myNums.filter( (num) =>  {
    return num > 4 // this is the correct way of using curly braces with return keyword as mentioned above.
})
console.log(newNums3);// retrns [5,6,7,8,9,10]



const newNums4 = []

myNums.forEach( (num) => {
    if (num > 4) {
        newNums4.push(num)//using foreach loops
    }
} )
console.log(newNums4); //returns [5,6,7,8,9,10]


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')
  console.log(userBooks);// returns all book with history genre
   

  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
  console.log(userBooks);// returns all books which are published after 1995 with history genre.

//****************************************MAP**********************************//

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})

const newNum = myNumers
.map((num) => num * 10 )
.map( (num) => num + 1)
.filter( (num) => num >= 40) //--> chaining

console.log(newNum);


//****************************************REDUCE**********************************//

const myNums1 = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNums1.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);

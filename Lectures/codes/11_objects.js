// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "ironspec",
    "full name": "Aditya Kumar Tiwari",
    [mySym]: "mykey1",
    age: 18,
    location: "kanpur",
    email: "adii@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])//another way of declaring array.
console.log(JsUser["full name"])
console.log(JsUser[mySym])


JsUser.email = "hitesh@chatgpt.com"//changing 
email
Object.freeze(JsUser)//freezing object i.e. making values of object fixed
JsUser.email = "hitesh@microsoft.com"//changing object
console.log(JsUser);//no change shown as we have freezed the object

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

// const tinderUser = new Object()--> way to create a object
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {//creating object inside object 
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);//printing object inside object

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
//const obj3 = Object.assign({}, obj1, obj2, obj4)//Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object

const obj3 = {...obj1, ...obj2}//using spread to concat two arrays 
console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email//to acess user email 
console.log(tinderUser);

console.log(Object.keys(tinderUser));//to print keys of object
console.log(Object.values(tinderUser));//to print values of object
console.log(Object.entries(tinderUser));//to print both key and value
 

console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]
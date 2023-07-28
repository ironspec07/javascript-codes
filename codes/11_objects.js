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
JsUser.email = "hitesh@microsoft.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
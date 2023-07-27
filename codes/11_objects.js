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

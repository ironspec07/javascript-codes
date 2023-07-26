//JavaScript Date objects represent a single moment in time in a platform-independent format. Date objects encapsulate an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970, UTC.

// in future there is a preposal to make temporal api an object just like Math object

let myDate = new Date()
console.log(myDate.toString());//Wed Jul 26 2023 14:56:55 GMT+0000 (Coordinated Universal Time)

console.log(myDate.toDateString());//Wed Jul 26 2023

console.log(myDate.toISOString());//2023-07-26T14:59:23.269Z

console.log(myDate.toJSON());//2023-07-26T15:00:12.782Z

console.log(myDate.toLocaleDateString());// 7/26/2023

console.log(myDate.toLocaleString());// 7/26/2023, 3:01:41 PM

console.log(myDate.toLocaleTimeString());// 3:02:27 PM


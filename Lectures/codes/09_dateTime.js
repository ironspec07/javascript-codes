//JavaScript Date objects represent a single moment in time in a platform-independent format. Date objects encapsulate an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970, UTC.

// in future there is a preposal to make temporal api an object just like Math object

let myDate = new Date()

//here type of myDate is object.

console.log(myDate.toString());//Wed Jul 26 2023 14:56:55 GMT+0000 (Coordinated Universal Time)

console.log(myDate.toDateString());//Wed Jul 26 2023

console.log(myDate.toISOString());//2023-07-26T14:59:23.269Z

console.log(myDate.toJSON());//2023-07-26T15:00:12.782Z

console.log(myDate.toLocaleDateString());// 7/26/2023

console.log(myDate.toLocaleString());// 7/26/2023, 3:01:41 PM

console.log(myDate.toLocaleTimeString());// 3:02:27 PM

let createdDate = new Date(2023,5,19)//creates desired date (year,month[starting from 0],day)
console.log(createdDate.toDateString());

let goodDate = new Date("2007-06-19")//here months start from 1
console.log(goodDate.toDateString());

let myTimeStamp =Date.now()
console.log(myTimeStamp);//prints time in mili second from 1-1-1970

console.log(goodDate.getTime());

console.log(Math.floor(Date.now()/1000));//to get time in seconds

console.log(goodDate.getDay()); // 2-> tuesday
console.log(goodDate.getMonth()); // 5=> june (starts from 0)
console.log(goodDate.getFullYear()); // 2007
console.log(goodDate.getUTCDate()); // 19
console.log(goodDate.getDate()); // 19
console.log(goodDate.getUTCDay()); // 2=>tuesday

console.log(goodDate.toLocaleString('default',{
    day:"2-digit",//19
    weekday:"long"//tuesday
}));





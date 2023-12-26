function add7(num) {
    return num+7
}
console.log(add7(7));

function multiply(num1 , num2) {
    return num1*num2
}
console.log(multiply(2,3));

function capitalize(str) {
    return  str.charAt(0).toUpperCase() + str.slice(1);
}
console.log(capitalize("hello!"));
function lastletter(str1) {
    for (let i = 0; i< str1.length; i++) {
        if (str1.length-1 == i) {
            console.log(str1.charAt(i));
        }
    }
}
lastletter("hello")
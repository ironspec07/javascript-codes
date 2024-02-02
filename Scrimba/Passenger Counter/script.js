// document.getElementById("count-el").innerText = 5

let count = 0

function increment() {
    count++
    document.getElementById("count-el").innerText = count
}
function decrement() {
    count--
    document.getElementById("count-el").innerText = count
}
function save() {
    console.log(count);
}
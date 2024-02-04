

let count = 0

function increment() {
    count++
    document.getElementById("count-el").innerText = count
}
function decrement() {
    count--
    document.getElementById("count-el").innerText = count
}
function reset() {
    count = 0
    document.getElementById("count-el").innerText = count
}
function save() {
    document.getElementById("save-el").innerText += " "+ count
    document.getElementById("save-el").innerText += ","
}
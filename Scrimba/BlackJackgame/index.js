let firstCard = 2 + Math.floor(Math.random() * 10);

let secondCard = 2 + Math.floor(Math.random() * 10);

let sum = firstCard + secondCard;

let hasBlackjack = false;
let isAlive = true;
let message = "";

let message_el = document.getElementById("message-el");
let sum_el = document.getElementById("sum-el");
let cards_el = document.getElementById("cards-el");

function startGame() {
    cards_el.textContent += " " + firstCard + " ," + " " + secondCard;

    sum_el.textContent += " " + sum;

    if (sum < 21) {
    message = "Do you want to draw a new card? 🙂";
    } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack! 🥳";
    hasBlackjack = true;
    } else {
    message = "You're out of the game! 😭";
    isAlive = false;
    }
    message_el.textContent = message;
    document.getElementById("start-btn").disabled = true;
}
function newCard() {
  let thirdCard = 2 + Math.floor(Math.random() * 10);

    cards_el.textContent += ", " + thirdCard;

    sum += thirdCard;

    sum_el.textContent = "Sum: " + sum;

    if (sum < 21) {
    message = "Do you want to draw a new card? 🙂";
    } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack! 🥳";
    hasBlackjack = true;
    document.getElementById("new-btn").disabled = true;
    } else {
    message = "You're out of the game! 😭";
    isAlive = false;
    document.getElementById("new-btn").disabled = true;
    }
    message_el.textContent = message;
}
function resetGame() {
    location.reload();
}

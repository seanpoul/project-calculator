const calcAnswer = document.querySelector('.answer');
const allButtons = document.querySelectorAll('button');
const operators = document.getElementsByClassName('.operators');
const clear = document.getElementById('.clear');
const equal = document.getElementById('.equal');
const dot = document.getElementById('.dot');

let value1 = "";
let value2 = "";

let result = "";
let operator = "";

let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => {
    if (b == 0) {
        calcAnswer.innerText = "ERROR. Can not divide by 0.";
    }
    else {
        a / b;
    }
}

allButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        let value = e.target.value
        value1 = calcAnswer.innerText
        calcAnswer.innerText += value
    })
})

function operate() {
    let mathOne = firstNum;
    let mathTwo = secondNum;
    if (operator = "+") {
        result = add(mathOne, mathTwo);
    }
    if (operator = "-") {
        result = subtract(mathOne, mathTwo);
    }
    if (operator = "*") {
        result = multiply(mathOne, mathTwo);
    }
    if (operator = "/") {
        result = divide(mathOne, mathTwo);
    }
}
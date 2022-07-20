const calcAnswer = document.querySelector('.answer');
const allButtons = document.querySelectorAll('button');
const operators = document.getElementsByClassName('.operators');
const clear = document.getElementById('.clear');
const equal = document.getElementById('.equal');
const dot = document.getElementById('.dot');

let value1 = "";
let value2 = "";

let result = 0;
let operatorValue = "";

let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => {
    if (b == 0) {
        return 'nope';
    }
    else {
        a / b;
    }
}

allButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        let value = e.target.value;
        value1 = calcAnswer.innerText;
        calcAnswer.innerText += value;
        getNumbers(e)
    })
})

function operate() {
    let mathOne = firstNum;
    let mathTwo = secondNum;
    console.log(operatorValue)
    if (operatorValue == "+") {
        result = add(mathOne, mathTwo);
    }
    if (operatorValue = "-") {
        result = subtract(mathOne, mathTwo);
    }
    if (operatorValue = "*") {
        result = multiply(mathOne, mathTwo);
    }
    if (operatorValue = "/") {
        result = divide(mathOne, mathTwo);
    }
}

let firstNum = "";
let secondNum = "";

function getNumbers(e) {
    if (operatorValue == "") {
        let attribute = e.target.value;
        firstNum = firstNum + attribute;
        calcAnswer.textContent = firstNum;
    }
    else {
        let attribute = e.target.value;
        secondNum = secondNum + attribute;
        calcAnswer.textContent = secondNum;
    }
    operate()
}
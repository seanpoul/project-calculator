// const answerBtn = document.querySelector(".answer")
// const plusBtn = document.querySelector(".plus")
// const oneBtn = document.querySelector(".one")
// const twoBtn = document.querySelector(".two")

// let answer = answerBtn;
// let one = oneBtn.textContent;
// let plus = plusBtn;

// oneBtn.addEventListener('click', event => {
//     answer.textContent += one;
//     console.log(event);
// })


const clicked = document.querySelector('.calculator');

clicked.addEventListener('click', event => {
    const { target } = event;
    const num  = target.textContent;
    updateDisplay()
});

function add(firstOperand, secondOperand) {
    console.log(firstOperand + secondOperand);
}

function subtract(firstOperand, secondOperand) {
    console.log(firstOperand - secondOperand);
}

function multiply(firstOperand, secondOperand) {
    console.log(firstOperand * secondOperand);
}

function divide(firstOperand, secondOperand) {
    console.log(firstOperand / secondOperand);
}

function operate(firstOperand, secondOperand, operator) {
    if (operator === "+") {
        add(firstOperand, secondOperand);
    }
    else if (operator === "-") {
        subtract(firstOperand, secondOperand);
    }
    else if (operator === "*") {
        multiply(firstOperand, secondOperand);
    }
    else if (operator === "/") {
        divide(firstOperand, secondOperand);
    }
}

function updateDisplay() {
    const display = document.querySelector('.answer');
    console.log(display)
}

function calculate() {

}
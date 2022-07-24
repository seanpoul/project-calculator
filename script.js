const calcAnswer = document.querySelector('.answer');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const clearBtn = document.getElementById('clear');
const equalBtn = document.getElementById('equal');
const deleteBtn = document.getElementById('delete');

const operators = ["+", "-", "*", "/"];

let previousValue = "";
let currentValue = "";

class Calculator {
    constructor(previousValue, currentValue) {
        this.previousValue = previousValue;
        this.currentValue = currentValue;
        this.clear();
    }

    clear() {
        calcAnswer.textContent = "";
        previousValue = "";
        currentValue = "";
    }

    deleteNum() {
        display = calcAnswer.textContent;
        display = display.slice(0, -7);
        calcAnswer.textContent = display;
    }

    appendNumber() {

    }

    chooseOperation() {

    }

    compute() {

    }

    updateDisplay() {
        this.calcAnswer = currentValue;
    }

}

const calculator = new Calculator(previousValue, currentValue)

numberButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        calculator.appendNumber(button.value);
        calculator.updateDisplay();
    })
})



// numberButtons.forEach(button => {
//     button.addEventListener('click', (event) => {
//         let clickedValue = event.target.value;
//         if (clickedValue === "." && calcAnswer.textContent.includes(".")) return
//         calcAnswer.textContent += clickedValue;
//         if (clickedValue.includes("+")) {
//             previousValue = calcAnswer.textContent.slice(0, -1)
//             if (previousValue != "") {
//                 currentValue += clickedValue;
//                 console.log(previousValue);
//                 console.log(currentValue);
//                 console.log(calcAnswer.textContent);
//             }
//         }
//     })
// })
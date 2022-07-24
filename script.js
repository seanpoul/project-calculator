const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const clearBtn = document.querySelector('#clear');
const equalBtn = document.querySelector('#equal');
const deleteBtn = document.querySelector('#delete');
const previousNum = document.querySelector('.previous');
const currentNum = document.querySelector('.current');

class Calculator {
    constructor(previousNum, currentNum) {
        this.previousNum = previousNum;
        this.currentNum = currentNum;
        this.clear();
    }

    clear() {
        this.previousOperand = "";
        this.currentOperand = "";
        this.operation = undefined;
        this.previousNum.textContent = "";
    }

    deleteNum() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }

    appendNumber(number) {
        if (number === "." && this.currentOperand.includes(".")) return
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    chooseOperation(operation) {
        if (this.currentOperand === "") return
        if (this.previousOperand !== "") {
            this.compute();
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = "";
    }

    compute() {
        let computation
        const prev = parseFloat(this.previousOperand);
        const curr = parseFloat(this.currentOperand);
        if (isNaN(prev) || isNaN(curr)) return;
        switch (this.operation) {
            case '+':
                computation = prev + curr;
                break
            case '-':
                computation = prev - curr;
                break
            case '*':
                computation = prev * curr;
                break
            case '/':
                computation = prev / curr;
                break
            default:
                return
        }
        this.currentOperand = computation;
        this.operation = undefined;
        this.previousOperand = "";
    }

    updateDisplay() {
        this.currentNum.textContent = this.currentOperand;
        if (this.operation != null) {
            this.previousNum.textContent = `${this.previousOperand} ${this.operation}`;
        }
    }

}

const calculator = new Calculator(previousNum, currentNum)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.textContent);
        calculator.updateDisplay();
    })
})

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.textContent);
        calculator.updateDisplay();
    })
})

equalBtn.addEventListener('click', button => {
    calculator.compute();
    calculator.updateDisplay();
})

clearBtn.addEventListener('click', button => {
    calculator.clear();
    calculator.updateDisplay();
})

deleteBtn.addEventListener('click', button => {
    calculator.deleteNum();
    calculator.updateDisplay();
})
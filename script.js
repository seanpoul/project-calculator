const calcAnswer = document.querySelector('.answer');
const allButtons = document.querySelectorAll('button');
// const operators = document.getElementsByClassName('operators');
const clear = document.getElementById('clear');
const equal = document.getElementById('equal');
const dot = document.getElementById('dot');

const operators = ["+", "-", "*", "/"];

let display 
let previousValue = "";
let currentValue = "";

allButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        let clickedValue = event.target.value;
        
        console.log(calcAnswer.textContent);
        if (clickedValue.includes("+")) {
            previousValue = calcAnswer.textContent
            // console.log(previousValue)
            // console.log(calcAnswer.textContent);
            if (previousValue != "") {

                currentValue += clickedValue;
                console.log(previousValue);
                console.log(currentValue);
                console.log(calcAnswer.textContent);
            }
        }

        calcAnswer.textContent += clickedValue;

        if (clickedValue == "clear") {
            calcAnswer.textContent = "";
            previousValue = "";
            currentValue = "";
        }
        if (clickedValue == "delete") {
            display = calcAnswer.textContent;
            display = display.slice(0, -7);
            calcAnswer.textContent = display;
        }
        if (clickedValue == ".") {
            if (calcAnswer.textContent.includes(".")) {
                button.disabled = true;
            }
        }
        if (!(calcAnswer.textContent.includes("."))) {
            dot.disabled = false;
        }
    })
})


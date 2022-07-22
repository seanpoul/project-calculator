const calcAnswer = document.querySelector('.answer');
const allButtons = document.querySelectorAll('button');
const operators = document.getElementsByClassName('operators');
const clear = document.getElementById('clear');
const equal = document.getElementById('equal');
const dot = document.getElementById('dot');

let display

allButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        let clickedValue = event.target.value;
        calcAnswer.textContent += clickedValue;
        console.log(calcAnswer.textContent);
        if (clickedValue == "clear") {
            calcAnswer.textContent = "";
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


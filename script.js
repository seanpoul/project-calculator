const calcAnswer = document.querySelector('.answer');
const allButtons = document.querySelectorAll('button');
const operators = document.getElementsByClassName('.operators');
const clear = document.getElementById('.clear');
const equal = document.getElementById('.equal');
const dot = document.getElementById('.dot');


allButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        let clickedValue = event.target.value;
        calcAnswer.textContent += clickedValue;
        // console.log(calcAnswer.textContent);
        if (clickedValue == "clear") {
            calcAnswer.textContent = "";
        }
        if (clickedValue == "delete") {
            let display = calcAnswer.textContent;
            display = display.slice(0, -7);
            calcAnswer.textContent = display;
        }







    })
})


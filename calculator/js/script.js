const buttons = document.querySelectorAll("button");
const numbers = document.getElementsByClassName("number");
const display = document.querySelector("#display");
const functions = document.getElementsByClassName("function");
let num1 = "0";
let num2 = "0";
for(let button of buttons){
    button.addEventListener("click", (event) => {
        const key = event.target;
        const keyValue = key.textContent;
        let displayValue = display.innerHTML;

        displayValue = keyValue;
        console.log(keyValue);
        console.log(displayValue)
    })
}
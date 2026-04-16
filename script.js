let firstNumber = "";
let secondNumber = "";
let operator = "";

function operate(operator,firstNumber,secondNumber){
    return 0;
}

function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply (a,b){
    return a*b;
}

function divide (a,b){
    return a/b;
}

const display = document.querySelector("#display");
const btn = document.querySelectorAll("button");
btn.forEach((button) => {
  button.addEventListener("click", () => {
    display.value = button.textContent;
    
    if(firstNumber == "")
        firstNumber = display.value;
    else if (operator == "")
        operator = display.value;
    else if(secondNumber == "")
        secondNumber = display.value
    else
        operate(operator,firstNumber,secondNumber);
  });
});

let firstNumber = "";
let secondNumber = "";
let operator = "";
let value = "";

const operators = ["+","-","/","x"];

function operate(operator,firstNumber,secondNumber){
    if (operator == "+")
        return add(firstNumber,secondNumber);
    else if(operator == "-")
        return subtract(firstNumber,secondNumber);
    else if(operator == "x")
        return multiply(firstNumber,secondNumber);
    else if(operator == "/")
        return divide(firstNumber,secondNumber);

}

function add(a,b){
    return Math.round((Number(a)+Number(b)) * 100) / 100;
}

function subtract(a,b){
    return Math.round((a-b) * 100) / 100;
}

function multiply (a,b){
    return Math.round((a*b) * 100) / 100;
}

function divide (a,b){
    if(b=="0")
        return "Error";
    else
        return Math.round((a/b) * 100) / 100;
}

const display = document.querySelector("#display");
const btn = document.querySelectorAll("button");
btn.forEach((button) => {
  button.addEventListener("click", () => {
    if(operators.includes(button.textContent.at(-1))){
        operator = button.textContent;
        firstNumber = display.value;
        console.log(firstNumber);
        console.log(operator);
        value = "";
        
    }else if(display.value.includes('.')){
        
    }
    else if(button.textContent == "="){
        secondNumber = display.value;
        if(firstNumber == "" || secondNumber == "" || operator == "0"){
            display.value = "0";
            value ="";
                }
        else{

            display.value = operate(operator,firstNumber,secondNumber);
            firstNumber = Number(display.value);
            operator = "";
            secondNumber = "";
            value = "";
        }
    }
    else  if(button.textContent == "C"){
        display.value = "0";
        firstNumber == "";
        secondNumber == "";
        operator =="";
        value = "";
    }
    else{
        value += button.textContent;
        display.value = value;

    }

    
     


    /** 
    if(button.textContent != "="){
        display.value = button.textContent;
    }
    if(button.textContent == "C"){
        display.value = "0";
        firstNumber == "";
        secondNumber == "";
        operator =="";
    }

    if(firstNumber == "")
        firstNumber = display.value;
    else if (operator == "")
        operator = display.value;
    else if(secondNumber == "")
        secondNumber = display.value
    else if(button.textContent == "="){

        console.log(firstNumber);
        console.log(operator);
        console.log(secondNumber);
        display.value = operate(operator,firstNumber,secondNumber);
        firstNumber = Number(display.value);
        operator = "";
        secondNumber = "";
    }**/



  });
});

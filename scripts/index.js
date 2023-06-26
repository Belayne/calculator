
let firstNum = null;
let secondNum = null;
let currentNum = "";
let operator = "";
let expression = "";
let selectingOp = false;
let zeroDivision = false;

const numBtns = document.querySelectorAll('.number');
const dotBtn = document.querySelector('.dot');
numBtns.forEach(btn => btn.addEventListener("click", updateNum));
dotBtn.addEventListener("click", makeDecimal);

const currentSpan = document.querySelector('.current');
const expressionSpan = document.querySelector('.expression');

const opBtns = document.querySelectorAll(".operator");
opBtns.forEach(btn => btn.addEventListener("click", setOperator))

const powerBtn = document.querySelector('button[data-value="power"]');
powerBtn.addEventListener("click", setOperator);

const clearBtn = document.querySelector('button[data-value = "clear"]');
clearBtn.addEventListener("click", clear);

const backBtn = document.querySelector('button[data-value = "back"]');
backBtn.addEventListener("click", back);

const signBtn = document.querySelector('button[data-value = "sign"]')
signBtn.addEventListener('click', sign);

const equalsBtn = document.querySelector('button[data-value = "equals"]')
equalsBtn.addEventListener('click', equals)



const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const power = (a, b) => a ** b;

const divide = (a, b) => {
    if(b == 0) {
        zeroDivision = true;
        if(a == 0) return "Undefined"
        else return "You can't divide by zero"
    }
    let result = a / b;
    return formatDivide(result);
}

const formatDivide = (result) => {
    let formattedRes = (Number.isInteger(result))? result: +result.toPrecision(10).replace(/0+$/, "");
    return formattedRes;
}

const operate = (a, b) => {
    switch(operator) {
        case "add": return add(a, b);
        case "subtract": return subtract(a, b);
        case "divide": return divide(a, b);
        case "multiply": return multiply(a, b);
        case "power": return power(a, b);
    }
    return "Error";
}

function updateNum() {
    if(zeroDivision) {
        clear();
        zeroDivision = false;
    }
    else {
        let clicked = this.getAttribute("data-value");
        if(!currentNum && clicked == "0") currentNum = 0;
        else if(currentNum.length < 10) currentNum = currentNum + clicked;    
        selectingOp = false;
        displayNum()
    }
}

function makeDecimal() {
    if(!currentNum) {
        currentNum = "0."
    } else if (!currentNum.includes(".") && currentNum.length < 10) {
        currentNum = currentNum + ".";
    }
    displayNum()
}

function displayNum() {
    currentSpan.textContent = currentNum;
}


function setOperator() {
    if(zeroDivision) {
        clear();
        zeroDivision = false;
    }
    else {
        if(selectingOp) {
            expression = expression.replace(/[^\s]+$/, "");
            operator = this.getAttribute("data-value")
            updateExp(this.textContent);
        }
        else {
            updateExp(this.textContent)
            if(firstNum != null) {
                calculate();
                operator = this.getAttribute("data-value")
            }
            else {
                firstNum = +currentNum;
                currentNum = "";
                operator = this.getAttribute("data-value")
            }
        }
        selectingOp = true;
    }
}

function calculate() {
    secondNum = +currentNum;
    result = operate(firstNum, secondNum);
    currentNum = result;
    firstNum = result;
    displayNum();
    currentNum = "";
}

function updateExp(expOperator) {
    expression = expression + " " + currentNum + " " + expOperator
    displayExp();
}

function displayExp() {
    expressionSpan.textContent = expression;
}

function clear() {
    expression = "";
    currentNum = "";
    firstNum = null;
    secondNum = null;
    operator = null;
    displayExp();
    currentSpan.textContent = 0;
}

function back() {
    if(currentNum.length > 1) currentNum = currentNum.slice(0, currentNum.length - 1)
    else currentNum = 0;
    displayNum();
}

function sign() {
    currentNum = -(+currentNum)
    displayNum();
}

function equals() {
    if(firstNum != null && !selectingOp) {
        updateExp("=")
        calculate();
    }
    selectingOp = true;
}


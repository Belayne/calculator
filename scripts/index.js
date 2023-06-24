
let firstNum;
let secondNum;
let result = "";
let expression = "";
let currentNum = "";
let isOperating = false;
let operator = "";

const numBtns = document.querySelectorAll('.number');
const dotBtn = document.querySelector('.dot');
numBtns.forEach(btn => btn.addEventListener("click", updateNum));
dotBtn.addEventListener("click", updateNum);

const currentSpan = document.querySelector('.current');
const previousSpan = document.querySelector('.previous');

const operators = document.querySelector(".operators");


const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const power = (a, b) => a ** b;

const divide = (a, b) => {
    if(b == 0) return "Ayo you can't do that";
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
    let clicked = this.getAttribute("data-value");
    if(clicked == ".") {
        if(!currentNum) {
            currentNum = "0."
        } else if (!currentNum.includes(".") && currentNum.length < 10) {
            currentNum = currentNum + ".";
        }
    }

    else {
        if(!currentNum && clicked == "0") currentNum = 0;
        else if(currentNum.length < 10) currentNum = currentNum + clicked;
    }
    displayNum(currentNum)
}

function displayNum() {
    currentSpan.textContent = currentNum;
}


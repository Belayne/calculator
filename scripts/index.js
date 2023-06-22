
let firstNum;
let secondNum;
let operator;

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

const operate = (a, b, operator) => {
    switch(operator) {
        case "add": return add(a, b);
        case "subtract": return subtract(a, b);
        case "divide": return divde(a, b);
        case "multiply": return multiply(a, b);
        case "power": return power(a, b);
    }
    return "Error";
}
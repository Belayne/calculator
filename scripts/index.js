
const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const power = (a, b) => a ** b;

const divide = (a, b) => {
    let result = a / b;
    return formatDivide(result);
}

const formatDivide = (result) => {
    let formattedRes = (Number.isInteger(result))? result: +result.toPrecision(10).replace(/0+$/, "");
    return formattedRes;
}

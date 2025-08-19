function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b;
}

function div(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed"); // use throw
    }
    return a / b;
}

function expo(a, b) {
    return a ** b;
}

const calculator = (a, b, operator) => {
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return sub(a, b);
        case '*':
            return mul(a, b);
        case '/':
            return div(a, b);
        case '**':
            return expo(a, b);
        default:
            throw new Error("Invalid operator"); // throw error instead of return string
    }
}

const prompt = require("prompt-sync")();
try {
    let a = parseFloat(prompt("Enter first number: "));
    let b = parseFloat(prompt("Enter second number: "));
    let operator = prompt("Enter operator (+, -, *, /, **): ");

    if (isNaN(a) || isNaN(b)) {
        throw new Error("Invalid input: Please enter valid numbers");
    }

    let result = calculator(a, b, operator);

    if (Number.isInteger(result)) {
        console.log(`Result: ${a} ${operator} ${b} = ${result}`);
    } else {
        console.log(`Result: ${a} ${operator} ${b} = ${result.toFixed(2)}`);
    }

} catch (error) {
    console.error("Error:", error.message);
}

function add(a, b) {
    return a+b
}

function subtract(a,b) {
    return a-b
}

function multiply(a, b) {
    return a * b;
}

function division(a,b) {
    if(b == 0) {
        throw new Error("Division by zero is not allowed.")
    }
    return a/b
}

function mod(a,b=a) {
    return a%b
}

function power(a,b) {
    return a**b
}

export {add, subtract, multiply, division, mod, power}
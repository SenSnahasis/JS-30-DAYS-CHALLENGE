/* Activity 1: Function Declaration */
// Task 1
function checkEvenOdd(num) {
    if(num%2==0) return 'even'
    return 'odd'
}
console.log(checkEvenOdd(16));

// Task 2
function findSquare(num) {
    return num*num
}
console.log(findSquare(5));


/* Activity 2: Function Expression */
// Task 3
maxValue = function(a,b) {
    return Math.max(a,b)
}
console.log(maxValue(19,4));

// Task 4
concatenate = function(a,b) {
    return a+' '+b
}
console.log(concatenate('snahasis','sen'));


/* Activity 3: Arrow Functions */
// Task 5
sumOfTwo = (a,b) => {
    return a+b
}
console.log(sumOfTwo(10,8));

// Task 6
checkChar = (str, ch) => {
    return str.includes(ch)
}
console.log(checkChar('snahasis','o'));


/* Activity 4: Function Parameters and Default Values */
// Task 7
function product(a, b=10) {
    return a*b
}
console.log(product(9,5));

// Task 8
function msg(name, age = 18) {
    return `Hello ${name}, your age is ${age}`
}
console.log(msg('snahasis'));


/* Activity 5: Higher-Order Functions */
// Task 9
const add = (a,b) => a+b
function higherOrder(x, fun) {
    for(let i=0;i<x;i++) {
        fun()
    }
}
const message = () => console.log('Hello this is Snahasis');
higherOrder(5, message)

// Task 10
const addi = (val) => val+2
const multi = (val) => val*2
function calculator(x, fun1, fun2) {
    result1 = fun1(x)
    result2 = fun2(result1)
    return result2
}
console.log(calculator(5, addi, multi));
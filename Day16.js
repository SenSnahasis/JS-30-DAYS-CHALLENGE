/* Activity 1: Basic Recursion */
// Task 1
function factorial(val) {
    if(val==1) {
        return val
    } 
    return val * factorial(val-1)
}
console.log(factorial(5));

// Task 2
function fibonacci(num) {
    if(num<=0) {
        return 0
    }
    if(num == 1) {
        return 1
    }
    return fibonacci(num-1) + fibonacci(num-2)
}
const nth = 9
console.log(`Fibonacci number at position ${nth} is ${fibonacci(nth)}`);



/* Activity 2: Recursion with Arrays */
// Task 3
function sum(array) {
    if(array.length == 0) {
        return 0
    }
    return array[0] + sum(array.slice(1))
}
const array = [1, 2, 3, 4, 5];
console.log(sum(array));

// Task 4
function findMaximum(arr) {
    if(arr.length == 0) {
        return 0;
    }
    return Math.max(arr[0], findMaximum(arr.slice(1)))
}
const arr = [3,6,12,17,9]
console.log(findMaximum(arr));



/* Activity 3: String Manipulation with Recursion */
// Task 5
function reverse(str) {
    if(str.length == 0) {
        return ""
    }
    return reverse(str.substring(1))+str[0]
}
console.log(reverse("snahasis"));

// Task 6
function checkPalindrome(str) {
    if(str.length <= 1) {
        return true
    }
    if(str[0] == str[str.length-1]) {
        return checkPalindrome(str.slice(1,-1))
    }
    return false
}
console.log(checkPalindrome('racecar'));
console.log(checkPalindrome('12321'));
console.log(checkPalindrome('hello'));



/* Activity 4: Recursive Search */
// Task 8
function findCount(arr, target) {
    if(arr.length == 0) {
        return 0;
    }
    return (arr[0]==target? 1: 0) + findCount(arr.slice(1),target)
}
const testCases = [2,4,2,5,1,2,2,2,8,0,5]
console.log(findCount(testCases,2));
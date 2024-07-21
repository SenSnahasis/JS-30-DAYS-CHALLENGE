/* Activity 1: Template Literals */
// Task 1
username = 'Snahasis'
age = 23
console.log(`Name is ${username} and age is ${age}`);

// Task 2
message = `Hello everyone,
this is Snahasis Sen.
Your host.`
console.log(message);


/* Activity 2: Destructuring */
// Task 3
array = [12,14,16]
const [firstEle, secondEle, thirdEle] = array
console.log(firstEle, secondEle);

// Task 4
book = {
    title: "Scan By Box",
    author: "ARC"
}
const {title, author} = book
console.log(title, author);


/* Activity 3: Spread and Rest Operators */
// Task 5
newArray = [...array, 18,20]
console.log(newArray);

// Task 6
function sum(...elements) {
    result = 0
    for(let i of elements) {
        result+=i
    }
    return result
}
console.log(sum(1,2,3));
console.log(sum(1,2,3,4,5));


/* Activity 4: Default Parameters */
// Task 7
function product(val1, val2=10) {
    return val1*val2
}
console.log(product(5));


/* Activity 5: Enhanced Object Literals */
// Task 8


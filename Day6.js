/* Activity 1: Array Creation and Access */
// Task 1
username = ['snahasis','pranav']
console.log(username[0]);
console.log(username[1]);

// Task 2
arr = [1,2,3,4,5]
console.log(`first element ${arr[0]} and last element ${arr[arr.length-1]}`);


/* Activity 2: Array Methods (Basic) */
// Task 3
arr.push(6)
console.log(arr);

// Task 4
console.log(arr.pop());

// Task 5
arr.unshift(10)
console.log(arr);

// Task 6
console.log(arr.shift());


/* Activity 3: Array Methods (Intermediate) */
// Task 7
const newArr = arr.map((e) => e*2)
console.log(newArr);

// Task 8
const evenArr = arr.filter((e)=> e%2==0)
console.log(evenArr);

// Task 9
const arrSum = arr.reduce((accu, e) => accu+=e)
console.log(arrSum);


/* Activity 4: Array Iteration */
// Task 10
for(let i=0;i<arr.length;i++) {
    console.log(arr[i]);
}

// Task 11
arr.forEach((e)=> console.log(e))


/* Activity 5: Multi-dimensional Arrays */
// Task 12
multiArray = [[1,2,3],[4,5,6],[7,8,9]]
console.log(multiArray);

// Task 13
for(let i=0;i<multiArray.length;i++) {
    for(let j=0;j<multiArray[i].length;j++) {
        console.log(multiArray[i][j]);
    }
}
/* Activity 1: Sorting Algorithms */
// Task 1
function bubbleSort(arr, n) {
    var swapped = false;
    let temp = 0
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }
        if (swapped == false) {
            break
        }
    }
}
function printArray(arr, size) {
    let result = ""
    for (let i = 0; i < size; i++) {
        result += arr[i] + " "
    }
    return result
}
var arr = [64, 34, 25, 12, 22, 11, 90];
var n = arr.length;
bubbleSort(arr, n);
console.log("Sorted array: ");
console.log(printArray(arr, n));


// Task 2
function selectionSort(arr, n) {
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                temp = arr[j];
                arr[j] = arr[minIndex];
                arr[minIndex] = temp;
                minIndex = j
            }
        }
    }
}
const numbers = [64, 25, 8, 12, 22, 11];
bubbleSort(numbers, numbers.length);
console.log("Sorted array: ");
console.log(printArray(numbers, numbers.length));


// Task 3
function quickSort(array) {
    if (array.length <= 1) {
        return array
    }
    const pivotIndex = Math.floor(array.length / 2)
    const pivot = array[pivotIndex]
    const left = []
    const right = []

    for (let i = 0; i < array.length; i++) {
        if (i !== pivotIndex) {
            if (pivot < array[i]) {
                right.push(array[i])
            } else {
                left.push(array[i])
            }
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}
const number = [64, 25, 12, 22, 11];
const sortedArray = quickSort(number);
console.log("Sorted array:", sortedArray);



/* Activity 2: Searching Algorithms */
// Task 4
function linearSearch(array, target) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == target) {
            return i
        }
    }
    return -1;
}
const array = [64, 25, 12, 22, 11];
const targetValue = 22;
console.log(linearSearch(array, targetValue))


// Task 5
function binarySearch(array, target) {
    let start = 0
    let end = array.length - 1
    while (start <= end) {
        let mid = Math.floor((start + end) / 2)
        if (array[mid] === target) {
            return mid
        } else if (arr[mid] > target) {
            end = mid - 1
        } else {
            start = mid + 1
        }
    }
    return -1;
}
const sortedNumbers = [11, 12, 22, 25, 64, 89, 111, 139];
const target = 12;
console.log(binarySearch(sortedNumbers, targetValue));



/* Activity 3: String Algorithms */
// Task 6
function countCharacterOccurrences(str) {
    const charCount = {};
    for (let ch of str) {
        ch = ch.toLowerCase()
        if (charCount[ch]) {
            charCount[ch]++
        } else {
            charCount[ch] = 1
        }
    }
    return charCount
}
const testString = "Hello, World!";
console.log(countCharacterOccurrences(testString));

// Task 7



/* Activity 4: Array Algorithms */
// Task 8
function rotateArray(arr, k) {
    const rotatedArr = new Array(arr.length)
    for(let ele = 0; ele < arr.length; ele++) {
        rotatedArr[((ele+k)%arr.length)] = arr[ele]
    }
    return rotatedArr
}
const newArray = [10, 20, 30, 40, 50]
console.log(rotateArray(newArray, 3));


// Task 9
function mergeSortedArrays(arr1, arr2) {
    return quickSort([...arr1, ...arr2])
}
const array1 = [1, 3, 5, 7];
const array2 = [2, 4, 6, 8];
console.log(mergeSortedArrays(array1, array2));
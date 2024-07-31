/* Activity 1: Understanding Closures */
// Task 1
function outer() {
    let browser = 'Chrome'
    function inner() {
        console.log(browser);
    }
    return inner
}
outer()()

// Task 2
function createCounter() {
    let counter = 0
    return {
        increment: function() {
            counter++
        },
        getCurrentValue: function() {
            return counter
        }
    }
}
const counter1 = createCounter();
counter1.increment();
console.log(counter1.getCurrentValue());
counter1.increment()
counter1.increment()
console.log(counter1.getCurrentValue());



/* Activity 2: Practical Closures */
// Task 3
function createUniqueIDGenerator() {
    let lastID = 7892821
    return function() {
        return lastID++
    }
}
const generateUniqueID = createUniqueIDGenerator()
console.log(generateUniqueID());
console.log(generateUniqueID());
console.log(generateUniqueID());
console.log(generateUniqueID());

// Task 4
function greetings(username) {
    return function() {
        return `Hi ${username}, Wellcome to Clouser World!!!`
    }
}
console.log(greetings('Snahasis')());



/* Activity 3: Closures in Loops */
// Task 5
function createFunctionsArray(size) {
    const functionsArray = []

    for(let i=0; i<size; i++) {
        functionsArray.push(function() {
            console.log(i);
        })
    }
    return functionsArray

}
const fun = createFunctionsArray(5)
fun.forEach((fn) => fn())



/* Activity 4: Module Pattern */
// Task 6
function createItemManager() {
    const arr = []
    return {
        add: function(item) {
            arr.push(item)
            console.log(`Added item: ${item}`);
        },
        remove: function(item) {
            const index = arr.indexOf(item)
            if(index !== -1) {
                arr.splice(index, 1);
                console.log(`Removed item: ${item}`);
            } else {
                console.log(`Item not found: ${item}`);
            }
        },
        getList: function() {
            console.log("Items:", arr);
        }
    }
}
const itemManager = createItemManager()
itemManager.add('Snahasis');
itemManager.add('Banti');
itemManager.getList()
itemManager.remove('Snahasis')
itemManager.add('Akash');
itemManager.add('Pranav');
itemManager.getList()


// Task 7

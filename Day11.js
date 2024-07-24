/* Activity 1: Understanding Promises */
// Task 1
const myPromise = new Promise((resolve, reject) => {
 setTimeout(()=> {
     console.log("Waiting for a promise message!!")
     resolve()
 },2000)
})
myPromise.then(() => console.log("After promise"))

// Task 2
const delayedError = new Promise((resolve, reject) => {
    setTimeout(() => {
        error = true
        if (!error) {
            console.log("Waiting for a promise message!!")
            resolve()
        } else {
            console.log('This is an error message after 2 seconds')
            reject()
        }
    }, 2000);
});
delayedError
.then(() => console.log("Resolve !!"))
.catch(() => console.log("Error !!"))



/* Activity 2: Chaining Promises */
// Task 3
function fetchDataFromServer1() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log('Fetched data from server 1');
            resolve('Data from server 1');
        }, 1000)
    })
}
function fetchDataFromServer2() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log('Fetched data from server 2');
            resolve('Data from server 2');
        }, 2000)
    })
}
fetchDataFromServer1()
    .then((data1) => {
        console.log('Processing ' + data1)
        return fetchDataFromServer2()
    })
    .then((data2) => {
        console.log('Processing ' + data2)
    })
    .catch((error) => {
        console.error('An error occurred:', error);
    })



/* Activity 3: Using Async/Await */    
// Task 4
async function asyncFunction() {
    try {
        const resolvedValue = await myPromise
        console.log(resolvedValue);
    } catch (error) {
        console.log(error);
    }
}
myPromise = new Promise(function(resolve, reject) {
    setTimeout(() => {
        resolve("Resolve Value")
    },2000)
})
asyncFunction()

// Task 5
const rejectPromise = new Promise(function (resolve, reject) {
    setTimeout(() => {
        const error = true
        if (!error) {
            resolve("Waiting for a promise message!!")
        } else {
            reject(new Error('This is the error message'));
        }
    }, 2000)
})
async function handleRejectedPromise() {
    try {
        const resolvedValue = await rejectPromise;
        console.log('Resolved value:', resolvedValue);
    } catch (error) {
        console.log(error);
    }
}
handleRejectedPromise()



/* Activity 4: Fetching Data from an API */
// Task 6
const githubData = new Promise(function(resolve, reject) {
    fetch('https://api.github.com/users/sensnahasis')
    .then(responce => {return responce.json()})
    .then(data => resolve(data))
    .catch(error => reject(error))
})
githubData.then((data) => console.log(data))

// Task 7
async function getData() {
    const data = await fetch('https://api.github.com/users/sensnahasis').then(responce => {return responce.json()})
    console.log(data);
}
getData()



/* Activity 5: Concurrent Promises */
//Task 8
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 1 resolved');
    }, 1000);
});
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Promise 2 rejected');
    }, 2000);
});
const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 3 resolved');
    }, 3000);
});
Promise.all([promise1, promise2, promise3])
    .then((values) => {
        console.log('All promises resolved:', values);
    })
    .catch((error) => {
        console.error('One of the promises rejected:',error);
});

// Task 9
Promise.race([promise1, promise2, promise3])
    .then((values) => {
        console.log('All promises resolved:', values);
    })
    .catch((error) => {
        console.error('One of the promises rejected:',error);
});
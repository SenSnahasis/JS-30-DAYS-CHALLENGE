/* Activity 1: Basic Error Handling with Try-Catch */
// Task 1
function checkNum(num) {
    if (num > 0) {
        return num;
    } else {
        throw new Error("Please give a positive number");
    }
}
try {
    console.log(checkNum(-4));
} catch (e) {
    console.error(e.message);
}

// Task 2
function devision(value1, value2) {
    if(value2>0) {
        return value1/value2
    }
    throw new Error('Please give denominator greater then zero!!')
}
try {
    console.log(devision(5,0))
} catch (error) {
    console.log(error.message)
}



/* Activity 2: Finally Block */
// Task 3
function devision(value1, value2) {
    if(value2>0) {
        return value1/value2
    }
    throw new Error('Please give denominator greater then zero!!')
}
try {
    console.log(devision(5,0))
} catch (error) {
    console.log(error.message)
} finally {
    console.log("All codes are executed!!");
}



/* Activity 3: Custom Error Objects */
// Task 4
// Define the Custom Error Class
class CustomError extends Error {
    constructor(msg) {
        super(msg)
        this.name = this.constructor.name;
    }
}
function devision(value1, value2) {
    if(value2>0) {
        return value1/value2
    }
    throw new CustomError('Please give denominator greater then zero!!')
}
try {
    console.log(devision(5,0))
} catch (error) {
    if(error instanceof CustomError) {
        console.error("CustomError caught:", error.message);
    } else{
        console.error("An unexpected error occurred:", error.message);
    }
}

// Task 5
class demoCustomError extends Error{
    constructor(msg) {
        super(msg)
        this.name = this.constructor.name
    }
}
function checkString(str) {
    if(str.length == 0) {
        throw new demoCustomError("Please provide a String!!!")
    }
    return str
}
try {
    console.log(checkString(''));
} catch (error) {
    if(error instanceof demoCustomError) {
        console.error("CustomError caught:", error.message);
    } else{
        console.error("An unexpected error occurred:", error.message);
    }
}



/* Activity 4: Error Handling in Promises */
// Task 6
const promise = new Promise((resolve, reject) => {
    const error = true;
    if (!error) {
        resolve('This is resolve message');
    } else {
        reject(new Error("Getting error....!!!"));
    }
});
promise
    .then(resolvedValue => {
        console.log('Resolved value:', resolvedValue);
    })
    .catch(error => {
        console.log(error.message);
    });

// Task 7
const errorPromise = new Promise((resolve, reject) => {
    const error = true;
    if (!error) {
        resolve('This is resolve message');
    } else {
        reject(new Error("Getting error....!!!"));
    }
});
const checkPromise = async function() {
    try {
        const resolvedValue = await errorPromise
        console.log(resolvedValue);
    } catch (error) {
        console.log(error.message);
    }
}
checkPromise()



/* Activity 5: Graceful Error Handling in Fetch */
// Task 8
function getGithubData() {
    fetch('https://api.github.com/users/sensnahasis')
    .then(response => {
        if(!response.ok) {
            throw new Error("Invalid URL!!! Please check once")
        }
        return response.json()
    })
    .then(data => console.log(data))
    .catch(error => console.log(error.message))
}
getGithubData()

// Task 9
async function gitHubData() {
    try {
        const response = await fetch('https://api.github.com/users/sensnahass');
        if(!response.ok) {
            throw new Error("Invalid URL!!! Please check once")
        }
        const data =  await response.json()
        console.log(data);
    } catch (error) {
        console.log(error.message);
    }
}
gitHubData()
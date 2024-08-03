/* Activity 1: Linked List */
// Task 1
const text1 = "I love JavaScript. JavaScript is a versatile language. Many people use JavaScript for web development.";
const regex1 = /javascript/gi;
console.log(text1.match(regex1));

// Task 2
const text2 = "There are 3 apples, 25 oranges, and 100 bananas.";
const regex2 = /\d+/g
console.log(text2.match(regex2));



/* Activity 1: Linked List */
// Task 3 
const text3 = "There are Apples, Oranges, and Bananas in the Basket.";
const regex3 = /\b[A-Z][a-z]*\b/g;
console.log(text3.match(regex3));

// Task 4
const text4 = "The year is 2024 and the time is 14:55. My phone number is 123-456-7890.";
const regex4 = /\d+/g
console.log(text4.match(regex4));



/* Activity 1: Linked List */
// Task 5
const phoneNumber = "(123) 456-7890"
const matches = phoneNumber.match(regex4)
const areaCode = matches[0]
const centralOfficeCode = matches[1]
const lineNumber = matches[2]

console.log(`Area Code: ${areaCode}`)
console.log(`Central Office Code: ${centralOfficeCode}`)
console.log(`Line Number: ${lineNumber}`)

// Task 6
function captureEmailParts(email) {
    const regex = /^([^@]+)@(.+)$/;
    const matches = email.match(regex);
    if (matches) {
        const username = matches[1];
        const domain = matches[2];
        console.log(`Username: ${username}`);
        console.log(`Domain: ${domain}`);
    } else {
        console.log("No matches found.");
    }
}
captureEmailParts('example.user@domain.com')
captureEmailParts('snahasis1001@gmail.com')



/* Activity 1: Linked List */
// Task 7
const text6 = "hello world! Hello everyone"
const regex6 = /^Hello/gi
console.log(text6.match(regex6));

// Task 8
const regex7 = /everyone$/gi
console.log(text6.match(regex7));



/* Activity 1: Linked List */
// Task 9
function validatePassword(password) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
    return regex.test(password);
}
console.log(validatePassword('Password123!'));
console.log(validatePassword('password123!'));

// Task 10
function validateURL(url) {
    const regex = /^(https?:\/\/)([\w.-]+)\.([a-z]{2,})(\/[\w.-]*)*\/?$/i;
    return regex.test(url);
}
console.log(validateURL('https://www.example.com'));
console.log(validateURL("www.example.com"));
console.log(validateURL('http://www.example.co.uk'));

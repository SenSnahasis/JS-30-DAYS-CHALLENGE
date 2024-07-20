/* Activity 1: If-Else Statements */
// Task 1
let number = -10;
if(number > 0) {
    console.log("This is a positive number");
} else if(number == 0) {
    console.log("This is a zero");
} else {
    console.log("This is a negative number");
}

// Task 2
let age = 17
if(age>=18) {
    console.log("Eligible for vote");
}else{
    console.log("Not eligible for vote");
}


/* Activity 2: Nested If-Else Statements */
// Task 3
num1 = 14
num2 = 12
num3 = 11
if(num1>num2) {
    if(num2>=num3) {
        console.log(`${num1} is the bigger number`);
    } else if(num3>num1){
        console.log(`${num3} is the bigger number`);
    } else{
        console.log(`${num1} is the bigger number`);
    }
} else if(num2>num3) {
    console.log(`${num2} is the bigger number`);
} else {
    console.log(`${num3} is the bigger number`);
}


/* Activity 3: Switch Case */
// Task 4
day = 7
switch(day) {
    case 1: console.log("Monday"); break
    case 2: console.log("Tuesday"); break
    case 3: console.log("Wednesday"); break
    case 4: console.log("Thusday"); break
    case 5: console.log("Friday"); break
    case 6: console.log("Saturday"); break
    case 7: console.log("Sunday"); break
    default: console.log("Choose a correct day number!!");
}

// Task 5
let marks = 85;
let grade = Math.floor(marks / 10);
switch (grade) {
    case 10:
    case 9:
        console.log("A");
        break;
    case 8:
    case 7:
        console.log("B");
        break;
    case 6:
        console.log("C");
        break;
    case 5:
    case 4:
        console.log("D");
        break;
    default:
        console.log("F");
        break;
}


/* Activity 4: Conditional (Ternary) Operator */
// Task 6
let num = 22
result = num%2==0?"even":"odd"
console.log(result);


/* Activity 5: Combining Conditions */
// Task 7
year = 1800
if(year % 4 == 0) {
    if(year % 100 == 0) {
        if(year %400 == 0) {
            console.log(`${year} is a leap year`);
        } else{
            console.log(`not a leap year`);
        }
    } else{
        console.log(`${year} is a leap year`);
    }
} else{
    console.log(`not a leap year`);
}
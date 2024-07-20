/* Activity 1: For Loop */
// Task 1
for(let i=0;i<10;i++) {
    console.log(i+1);
}

// Task 2
table = 5
for(let i=1;i<=10;i++) {
    console.log(`${table} x ${i} = ${table*i}`);
}


/* Activity 2: While Loop */
// Task 3
i=1
result = 0
while(i<=10) {
    result += i
    i++
}
console.log(result);

// Task 4
num = 10
while(num>0) {
    console.log(num--);
}


/* Activity 3: Do...While Loop */
// Task 5
num = 1
do{
    console.log(num++);
}while(num<=5);

// Task 6
num = 5
ans = 1
do{
    ans = ans*num
    num--
}while(num>0)
console.log(ans)


/* Activity 4: Nested Loops */
// Task 7
let pattern = "";
for(let i=0;i<5;i++) {
    for(let j=0;j<i+1;j++) {
        pattern = pattern+"* ";
    }
    pattern = pattern + "\n"
}
console.log(pattern);


/* Activity 5: Loop Control Statements */
// Task 8
for(let i=1;i<=10;i++) {
    if(i==5) {
        continue
    }
    console.log(i);
}

// Task 9
for(let i=1;i<=10;i++) {
    if(i==7) {
        break
    }
    console.log(i);
}
/* Activity 1: Class Definition */
// Task 1
class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    getGreeting() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`
    }
    updateAge(age) {
        this.age = age
    }
    static getGenericGreeting() {
        return 'Hello, welcome!';
    }
}
const person = new Person('Snahasis', 23)
console.log(person.getGreeting());

// Task 2
person.updateAge(24)
console.log(person.getGreeting());



/* Activity 2: Class Inheritance */
// Task 3
class Student extends Person{
    constructor(name, age, studentId) {
        super(name, age)
        this.studentId = studentId
    }
    getStudentId() {
        return `My student ID is ${this.studentId}.`;
    }
}
const student = new Student('Hrithik', 18, 212)
console.log(student.getGreeting());
console.log(student.getStudentId());

// Task 4
class Student1 extends Person{
    static studentCount = 0;
    constructor(name, age, studentId) {
        super(name, age)
        this.studentId = studentId
        Student1.studentCount += 1
    }
    getStudentId() {
        return `My student ID is ${this.studentId}.`;
    }
    getGreeting() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old. My student ID is ${this.studentId}. `
    }
    static getTotalStudents() {
        return `Total number of students: ${Student1.studentCount}`;
    }
}
const student1 = new Student1('Sudipta', 27, 195)
console.log(student1.getGreeting());



/* Activity 3: Static Methods and Properties */
// Task 5
console.log(Person.getGenericGreeting());

// Task 6
const student2 = new Student1('Samrat', 22, 197)
const student3 = new Student1('Sahil', 25, 220)
console.log(Student1.getTotalStudents());



/* Activity 4: Getters and Setters */
// Task 7
class Person1{
    constructor(firstname, lastname) {
        this.firstname = firstname
        this.lastname = lastname
    }
    getFullName() {
        return `${this.firstname} ${this.lastname}`;
    }
    setFullname(firstname, lastname) {
        this.firstname = firstname
        this.lastname = lastname
    }
}
const person1 = new Person1('Alice', 'Johnson');
console.log(person1.getFullName());

// Task 8
person1.setFullname('Bob', 'Smith');
console.log(person1.getFullName());



/* Activity 5: Private Fields (Optional) */
// Task 9 and Task 10
class Account {
    #balance = 0

    constructor(initialBalance) {
        if (initialBalance < 0) {
            throw new Error("Initial balance cannot be negative");
        }
        this.#balance = initialBalance;
    }

    deposit(amount) {
        if(amount<0) {
            throw new Error("Deposit amount must be positive");
        }
        this.#balance += amount
        return `Deposited: ${amount}. New balance: ${this.#balance}`;
    }

    withdraw(amount) {
        if(amount<0) {
            throw new Error("Withdraw amount must be positive");
        }
        if(amount>this.#balance) {
            throw new Error("Insufficient balance")
        }
        this.#balance -= amount
        return `Withdrew: ${amount}. New balance: ${this.#balance}`;
    }

    getBalance() {
        return this.#balance;
    }
}
try {
    const account = new Account(2000)
    console.log(account.deposit(2000));
    console.log(account.withdraw(1000));
    console.log(account.withdraw(4000));
} catch (error) {
    console.log(error.message);
}

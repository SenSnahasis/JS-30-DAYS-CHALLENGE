const person = {
    name: "snahasis",
    age: 23,
    company: "ARC Document Solution India Pvt Ltd",
    data: function() {
        console.log(`Hello everyone this is ${this.name} and I am ${this.age} years old. I am currently working in ${this.company}`);
    }
}

export default person
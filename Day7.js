/* Activity 1: Object Creation and Access */
// Task 1
book = {
    title: "Scan By Box",
    author: "ARC",
    year: 2023
}
console.log(book);

// Task 2
console.log(book.title);
console.log(book.author);


/* Activity 2: Object Methods */
// Task 3
book1 = {
    title: "Scan By Box",
    author: "ARC",
    year: 2023,
    details: () => {
        return `Book's title is ${book1.title} and author is ${book1.author}`
    },
    updateYear: (val) => {
        this.year = val;
    }
}
console.log(book1.details());

// Task 4
book2 = {
    title: "Scan By Box",
    author: "ARC",
    year: 2023,
    updateYear: (val) => {
        book2.year = val;
    }
}
book2.updateYear(2024)
console.log(book2.year);


/* Activity 3: Nested Objects */
// Task 5
library = {
    name: "ARC",
    books: [
        {
            title: "Bomkesh bakshi",
            author: "Sharadindu Bandyopadhyay",
            price: 200,
        },
        {
            title: "Feluda",
            author: "Satyajit Ray",
            price: 200,
        },
    ]
}
console.log(library);

// Task 6
console.log(library.name);
library.books.forEach(element => {
    console.log(element.title);
});


/* Activity 4: The 'this' Keyword */
// Task 7
newBook = {
    title: "Scan By Box",
    author: "ARC",
    year: 2023,
    details: function() {
        return `Book's title is ${this.title} and author is ${this.author}`
    }
}
console.log(newBook.details());


/* Activity 5: Object Iteration */
// Task 8
for(let i in library.books) {
    console.log(library.books[i].title, library.books[i].author, library.books[i].price);
}

// Task 9
for(let i in library.books) {
    console.log(Object.keys(library.books[i]), Object.values(library.books[i]));
}
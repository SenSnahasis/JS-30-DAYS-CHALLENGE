/* Activity 1: Selecting and Manipulating Elements */
// Task 1
const message = 'This is Snahasis Sen'
document.getElementById('header').innerText = message

// Task 2
document.querySelector('.demoClass').style.backgroundColor = "blue"


/* Activity 2: Creating and Appending Elements */
// Task 3
let newElement = document.createElement('div')
newElement.textContent = 'Hello, this is a new element!'
document.body.appendChild(newElement)

// Task 4
/*
    < ul id = "myList" >
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ >
*/
let newListItem = document.createElement('li')
newListItem.textContent = 'Item 4'

let ul = document.getElementById('myList')
ul.appendChild(newListItem)


/* Activity 3: Removing Elements */
// Task 5
let element = document.getElementById('name')
element.remove()

// Task 6
let list = document.getElementById('myList')
list.removeChild(list.lastChild)


/* Activity 4: Modifying Attributes and Classes */
// Task 7
let imageElement = document.getElementById('myImage');
imageElement.src = 'new_image.jpg';

// Task 8



/* Activity 5: Event Handling */
// Task 9
/*
<p id="paragraph">Old Paragraph is here!!</p>
<button onclick="addText()">Click</button>
*/
function addText() {
    document.getElementById('paragraph').innerHTML = 'This is a change paragraph.'
}


// Task 10



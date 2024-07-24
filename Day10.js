/* Activity 1: Basic Event Handling */
// Task 1
/*
<p id="paragraph">Old Paragraph is here!!</p>
<button onclick="changeText()">Click</button>
*/
function changeText() {
  document.getElementById('paragraph').innerHTML = "this is the new paragraph!!"
}

// Task 2
/*
<img src="Demo.jpg" alt="image">
<button id="toggleButton">Toggle Button</button>
*/
const img = document.querySelector('img')
const toggleButton = document.getElementById('toggleButton')

toggleButton.addEventListener('dblclick', function () {
  if (img.style.visibility === 'hidden') {
    img.style.visibility = 'visible'
  }
  else {
    img.style.visibility = 'hidden'
  }
})


/* Activity 2: Mouse Events */
// Task 3
/*
<button id="button">Change Background</button>
*/
const background = document.getElementById('button')
background.addEventListener('mouseover', function () {
  document.querySelector('body').style.backgroundColor = 'yellow'
})

// Task 4
background.addEventListener('mouseout', function () {
  document.querySelector('body').style.backgroundColor = 'black'
})


/* Activity 3: Keyboard Events */
// Task 5
/*
<input type="text">
*/
const inputText = document.querySelector('input')
inputText.addEventListener('keydown', function (res) {
  console.log(`${res.key}`)
})

// Task 6
inputText.addEventListener('keyup', function (res) {
  p = document.getElementById('paragraph')
  console.log(`${res.key}`)
  p.textContent = res.target.value;
})


/* Activity 4: Form Events */
// Task 7
/*
<form id="formType">
    <label for="name">Username: </label>
    <input type="text" id="name" name="name"> <br>
    <label for="email">Email: </label>
    <input type="text" id="email" name="email"> <br>
    <button type="submit">Submit</button>
</form>
*/
const form = document.getElementById('formType');
form.addEventListener('submit', function (event) {
  event.preventDefault();
  const formData = new FormData(form);
  const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });
  console.log(data);
});

// Task 8
/*
<label for="mySelect">Choose an option:</label>
  <select id="mySelect">
    <option value="Option 1">Option 1</option>
    <option value="Option 2">Option 2</option>
    <option value="Option 3">Option 3</option>
  </select>
<p id="selectedValue">Selected value will appear here.</p>
*/
const option = document.getElementById('mySelect');
const paragraph = document.getElementById('selectedValue')

option.addEventListener('change', function(event) {
  const selectedValue = event.target.value
  paragraph.innerText = `Selected option is ${selectedValue}`
})


/* Activity 5: Event Delegation */
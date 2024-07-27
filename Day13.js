/* Activity 1: Creating and Exporting Modules */
// Task 1
import adition from './modules/Add.js'
console.log(adition(10,5));

// Task 2
import person from './modules/Person.js'
person.data();



/* Activity 2: Named and Default Exports */
// Task 3
import {add, subtract, multiply, division} from './modules/Math.js'
console.log(`5 + 3 = ${add(5, 3)}`);
console.log(`5 - 3 = ${subtract(5, 3)}`);
console.log(`5 * 3 = ${multiply(5, 3)}`);
console.log(`5 / 3 = ${division(5, 3)}`);

// Task 4
import {mod} from './modules/Math.js'
console.log(mod(5));



/* Activity 3: Importing Entire Modules */
// Task 5
import * as Math from './modules/Math.js'
console.log(Math.power(5,2));



/* Activity 4: Using Third-Party Modules */
// Task 6
import _ from 'lodash';
const array = [1, 2, 3, 4, 5];
const shuffledArray = _.shuffle(array);

console.log('Original array:', array);
console.log('Shuffled array:', shuffledArray);

// Task 7
import axios from 'axios';
axios.get('https://api.github.com/users/sensnahasis')
.then(respose => {console.log(respose.data);})
.catch(error => {console.error();})

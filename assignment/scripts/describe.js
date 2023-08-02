// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We are making a variable for the name Dane.
// We are asking that if the name exactly matched Mary, then our console log with come back with, "Hi, Mary!". Any other name and it way come back with "How do you do?".
// In this code we will get "How do you do?" as the console log output since the name variable is sate to Dane.
//

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// First we make variable for secret and code. We set code to 123 and secret will set the variagle for secret.
// The first if conditional statement says if the code is exactly 123 then secret will return with "super" and then will mutiply the code value by 2.
// The second conditional if statement says if the code is greater than 250 the secret variable will equal duper when entered into the console log.
//In this code, secret will only return with super as code will be less than 250.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We start by setting up variables for isStudent, age, and zip. 
//This code then sets up a number of responses depending on if the variables meet the conditions in the "if else if else" conditional. If student is exatly true ane the zip code is greater than 8000 then the return in the console log will be "You are a student on the west coast!"
// If student is exatly flase and the age variable is less then 30 then the return will be "What are you hobbies?". If student is exatly true, the console log return will be "Welcome to Prime!". And if none of those conditionals are met then the return wil be "How about the weather?". We also set variables for student, age, and zip to use for this code.
//In this case, the code will return with "Welcome to Prime!" 
//

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;
FIX - colorOne and colorTwo are switched. Should be: let colorOne = 'blue' and let colorTwo = 'red' per the instructions given.

if (mix === true) {
  colorOne = 'purple';
  FIX - colorTwo is not listed at all in the if code. I would add a line and add: colorTwo = 'purple'
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
  FIX- || notate either condition can be met for the console.log to return with 'throw away the food!!'. For the fix, the || sould be replaced with && so that both conditionals must be met for the log to return "throw away the food!" as stated by the origional prompt.
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

FIX - to fit the code to meet the instructions, the code should look like this:
if(age >= minAge){
  console.log('enter');
} else {
  console.log('no entry');
}
We swittch age and minAge in the first like and change the <= for >=. We then have to switch 'entry' and 'no entry' to get the desired results for the code.

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/


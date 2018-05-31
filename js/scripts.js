//TAKE HOME FROM DAY 2
// create a program that...
// let firstName = prompt("Whats yo name?", "John");
// console.log(firstName);
// let lastName = prompt("Whats yo last name?", "Doe");
// alert(lastName);
// let birthday = prompt("Whats your birthday?", "May 21 1986");
// confirm("Is " + birthday + " your birthday?"); //ES5
// confirm(`Is ${birthday} your birtday?`); //ES6

let name = "Ryeker"; //truthy or true
let age = null; //falsey or false

if(name) {
  // alert()
}
if(!name && age) { 
  // alert('one exists');
}

const numAge = 32; //Number
const stringAge = '32'; //String
console.log(stringAge)
if(numAge != stringAge) {
  // alert('they\'re the same!');
} //this should always be false...why isnt it?

let objectOne = {
  name: "Ryeker"
};

let objectTwo = {
  name: "Ryeker"
};

// alert(objectOne == objectTwo); //ALWAYS FALSE


if(numAge <= stringAge.length) {
  alert('whaaaaaat?');
}







var myString = "hello world"; 
var objString = new String("hello world");
// alert(myString === objString);

let limit = 12;
// console.log(limit);
limit += 7;
limit = limit / 7;
// console.log(limit);
limit = limit + 1;
//
let myNumber = "77";

myNumber = parseInt(myNumber);

// console.log(isNaN(myNumber));
let numOne = parseInt(prompt('Give me a number', '10'));
let numTwo = prompt('Give me another number', '10');
numTwo = parseInt(numTwo);
// alert(numOne + numTwo);


if(numOne > numTwo) {
  alert("Your first number is bigger than your second number!");
} else if(firstName === numTwo) {
  alert("They're the same!");
} else if(numOne < numTwo) {
  alert("Number one is smaller than number Two!!");
} else {
  alert('Something went wrong...');
}

// if(numOne < numTwo) {
//   alert('yay');
// } else {
//   alert('booo');
// }
// 

let firstName = prompt("What is your first name?", "Tom");

switch(firstName.toLowerCase()) {
  case 'tom':
    alert('Hello Tom!');
    break;
  case 'john':
  case 'harry':
  case 'peter':
    alert('Your name is very common.');
    break;
  default: 
    alert('I have never heard that name before.');
    break;
}








//



let upperLimit = 23;



//

//Take home from day 1
var myGoal = "I want to help my students succeed in whatever their goals are for taking this class.";
var myHobby = "My hobby used to be writing code, but now it's my job, so I am currently looking for a new hobby.";

console.log(myGoal + myHobby);

//Day 2 In class notes

console.log(myName); // WIll return undefined because vars are hoisted
var myName = "Ryeker";
var myAge = 21;

let dozen = 12; //in the global scope, dozen is now 12.
{
  dozen = 13; //let variables are locked into their scope and do NOT get hoisted. in these brackets, dozen is 13.
} //this {} braces make a BLOCK of code, which creates a scope

console.log(dozen);//This will return 12.


const bestMovie = 'Empire Strikes Back'; //You cannot re-initialize a const variable, it will throw an error. It is bad practice to change the value of a const and will normally throw an error as well.


//In class excersize #1
let name = "Ryeker Thaddeus Herndon IV, esq.";
let birthday = new Date('5.21.86 16:21'); //Makes a Date Object of my birthday
const goal = new Number(22); //Makes a Number object of the number 22.

const stringObj = new String('To help you guys make money and be developers!!'); //Makes a String object of this sentence.

console.log(name, birthday, goal);
let ceilingExample = Math.ceil(8.2);
let floorExample = Math.floor(8.3);
console.log(ceilingExample); //returns 9 because Math.ceil() always returns the next whole number.
console.log(floorExample); //Returns 8 because Math.floor() returns next lower whole number.

let chores = ['feed the dog', 'try not to kill the cat', 34, [1, 4, 5]]; //This is an array. Arrays can hold any of the data types.

const user = {
  name: "Ryeker", //name is the "key" and "Ryeker" is the "value".
  password: "1234"
}; //Creates an object with two values.


let userMessage = alert("You are the best!"); //Pops up a message to the user to tell them something. 
let userConfirm = confirm("Do you want to eat cheese?"); //Asks the user to answer yes or no to a question, Returns a Boolean (true or false).
let userAnswer = prompt("Tell me about your day.", "It was tough."); //Allows the user to type in an answer. Returns the string value of what they responded with.

console.log(userAnswer);


/*
In class example #2
1. Declare 2 let variables:
  a. Favorite movie
  b. Favorite food
2. Declare 2 const variables:
  a. Year the movie came out 
  b. Ingredients of your favorite foods as an array.
3. Alert your Favorite food with its Ingredients
4. Confirm the movie and year.
*/

let favMovie = 'Empire Strikes Back';
let favFood = 'Baked Zitti';
const year = new Date(5/21/1980);
const ingredients = ["red sauce", "Zitti pasta", "An Italian"];

alert(favFood + ingredients);
confirm(favMovie + year);

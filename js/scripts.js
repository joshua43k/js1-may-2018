
let recipe = {
  flour: '20 oz', //flour is the key, '20oz.' is the value.
  eggs: 3,
  vanilla: true,
  rum: 'hella'
}; //Object Literal. 

console.log(recipe);

//RIGHT way to make a copy of an object
let clone = Object.create(recipe); //To safely/correctly make a copy of an object you should use Object.create()
console.log(Object.getPrototypeOf(clone), '< This is the prototype'); //Should show the original object you copied as the prototype

//WRONG way to make a copy of an object

let cheese = {
  isGood: true,
  sharpness: 1000
}; //Original

let cheeseCopy = cheese; //This will make a reference to the original, not what we want.

cheeseCopy.isGood = false; //This will change BOTH the original and the new instance

// console.log(cheese, 'ORIGINAL', cheeseCopy, 'COPY'); //Will show that both the old and new have been changed.

let stringExample = new String("hello there");
let numberExample = new Number(94);
let boolExample = new Boolean(true);
let arrayExample = new Array(["cheese", 222, [2]]);
let objectExample = new Object({cheeseIsGood: true});

// console.log(stringExample, numberExample, boolExample, arrayExample, objectExample); //Should be able to inspect the __proto__ chain and see the inherited parent objects

function Spaceship(rockets, fluxCapacitor, pilot, blasters, shield, landingGear) { //Always capitalize your constructor function names
  this.rockets = rockets;
  this.fluxCapacitor = fluxCapacitor;
  this.pilot = pilot;
  this.blasters = blasters;
  this.shield = shield;
  this.landingGear = landingGear;
}; //Constructor function (also the 4th way to bind THIS).

let firefly = new Spaceship(4, false, 'Mal Reynolds', Infinity); //This will return a new object with the properties that you passed in.


let users = []; //Collection of users we want to keep track of.

let submitBtn = document.querySelector('.btn');

function User(name, pw) { //Our contructor function for making new users
  this.name = name;
  this.pw = pw;
};

submitBtn.addEventListener('click', e => {
  e.preventDefault();
  let userName = document.forms.newUserForm.username.value;
  let password = document.forms.newUserForm.password.value;
  let newUser = new User(userName, password); //Use the data collected in our HTML form to create our new user
  users.push(newUser); //add our new user to our collection of users.
  document.forms.newUserForm.reset(); //reset the form inputs
  console.log(users); //Should show all our users each time we make a new one.
});



let advertisement = "HEY!!! WELCOME TO OUR SITE!!! GET 40% OFF TODAY!!!!!";

let myTimeout = 
setTimeout( //setTimeout function takes 2 arguemnts
  () => { //1. A callback function that will run after the time elapses.
    alert(advertisement);
  },
  5000); //2. How long do you want to wait?
  //This will wait 5 seconds and then alert our user

let cancelBtn = document.forms.newUserForm.cancelTimeout;

cancelBtn.addEventListener('click', e => {
  e.preventDefault(); //This is what I missed in class: we have to prevent the default action of reloading the page. If we don't, the page reloads and the timeout gets reinitialized.
  clearTimeout(myTimeout); //This will clear the timeout (or cancel it.)
});


//ONLINE STORE EXAMPLE
let cart = [];

function Product(name, price, description) {
  this.name = name;
  this.price = price;
  this.description = description;
};

let soapBtn = document.forms.orderForm.soap;

soapBtn.addEventListener('click', e => {
  e.preventDefault();
  let soap = new Product("soap", 2.99, "makes you clean!");
  cart.push(soap);
  localStorage.setItem('soap', JSON.stringify(soap)); //This will "stringify" our object so that the console can display it and store our cart in our local storage for later use.
});


function getSoap() {
  let storedItem = localStorage.getItem('soap'); //This retrieves our stringified object from local storage
  console.log(JSON.parse(storedItem)); //JSON.parse converts that stringified object into a usable object again!
}

getSoap();

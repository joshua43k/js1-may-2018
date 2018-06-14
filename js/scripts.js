let button = document.querySelector('button');
let div = document.querySelector('div');
const body = document.querySelector('body');
button.addEventListener('click', e => {
  e.target.textContent = "Goodbye cats!!";
});

div.innerHTML = "<p>lorem ipsum dolores cantu!!!</p>";

let newH1 = document.createElement('h1');
newH1.textContent = "Login here!!";
// body.appendChild(newH1);
newH1.className = "text-center";
body.insertBefore(newH1, div);

div.id = "red_text";

div.classList.add('text-center');

div.addEventListener('click', e => {
  div.classList.toggle('text-center');
  div.classList.replace('blue-background', 'green-background');
});

//Create teh img tag
myImg = document.createElement('img');

//Set the src attribute
myImg.setAttribute('src', 'https://images-na.ssl-images-amazon.com/images/I/71Wgm2SGrbL._SL1454_.jpg');
//Add teh img to the page
div.appendChild(myImg);
console.log(myImg);








//

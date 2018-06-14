let body = document.querySelector('body');

for(let i = 1; i <= 100; i++) {
  let p = document.createElement('p');
  if(i % 3 === 0 && i % 5 === 0) {
    p.textContent = 'FizzBuzz';
  } else if(i % 5 === 0) {
    p.textContent = 'Buzz';
    //do soem stuff
  } else if(i % 3 === 0 ) {
    p.textContent = 'Fizz';
  } else {
    p.textContent = i;
  }
  body.appendChild(p);
}

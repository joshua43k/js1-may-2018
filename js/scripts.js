// FUNCTIONS

// NAMED FUNCTION
function logHello() { // accepts 0 arguments
  console.log('hello!'); // does not return value but logs something to the console.
};

logHello(); // Function CALL. This is where the function is executed.

// ANONYMOUS FUNCTION 
let logOut = function() { // No name to the function
  console.log('str');
};

//Function that takes a string and capitalizes the first letters of each word.
function capitalCase(string) {
  let words = string.split(' '); //Creates an array of the words in the string.
  let returnArr = [];
  words.forEach(word => { //loop over the words in the array
    let letters = word.split(''); //split the word into its letters
    let capped = letters[0].toUpperCase(); //capitalize the first letter of the word.
    letters.splice(0, 1, capped); //Replace the old lower cased letter with the new uppercased one.
    returnArr.push(letters.join('')); //Push our new word into the array to be returned. 
  });
  return returnArr.join(' '); //Return the newly created string.
};


let newString = capitalCase("peter piper"); //function CALL

console.log(newString);

let capsName = capitalCase('captain america');
console.log(capsName);

let simleFatArrowFn = () => { //SIMPLEST fat arrow function
  console.log('stuff')
};

let singleArgFatArrowFn = stuff => { //1 argument fat arrow function
  console.log(stuff)
};

let multiArgFatArrowFn = (stuff, things, etc) => { //1 argument fat arrow function
  console.log(stuff)
};

function divide(arg1, arg2) { //Order of arguments MATTERS
  return arg2 / arg1;
}

//TRY IT OUT #1
/*Accept 1 argument (age of the dog in years).
Return the age of the dog using the conversion rate of 1 year to 7 "dog" years.
Alert the answer.*/

function ageDog(years) {
  if(!isNaN(years)) {
    return years * 7;
  } else {
    ageDog(parseInt(prompt("How old is your dog in years?", "3")))
  }

};

alert(ageDog(parseInt(prompt("How old is your dog in years?", "3"))));


//Try it out # 2

function lifetimeCalculator(age, dailyUse) {
  if(!isNaN(age) && !isNaN(dailyUse)) {
    const death = 80;
    return (death - age) * (dailyUse * 365);
  } else {
    userAge = prompt('how old are you?', '30');
    userUse = prompt("How much do you use every day?");
    lifetimeCalculator(parseInt(userAge), parseInt(userUse));
  }  
};

let userAge = prompt('how old are you?', '30');
let userUse = prompt("How much do you use every day?", '1');

let usage = lifetimeCalculator(parseInt(userAge), parseInt(userUse));

alert(`You will need ${usage} to last until you're 80.`);

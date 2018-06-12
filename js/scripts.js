//Takehome 1.
// let answer = powerOfTwo(parseInt(prompt("what do you want to square?", '2')));

function powerOfTwo(number) {
  if(!isNaN(number)) {
    return number * number;
  } else {
    alert("NaN");
    let answer = powerOfTwo(parseInt(prompt("That wasn't a number! What number?", '2')));
    alert(answer);
  }
};

// alert(answer);

//Takehome 3.
function parseString(string) {
  let parsedLetter = string.charAt(0).toUpperCase();
  let stringArr = string.split('');
  stringArr.splice(0, 1, parsedLetter);
  string = stringArr.join(''); //Replaces the first letter with the new uppercased letter
  if(string.charAt(string.length - 1) !== '.') string = string + '.';
  return string;
}

// let answer = parseString(prompt("Type something in.", "i Heart cheese."));
// alert(answer)

//Takehome 4

function reverseHalves(string) {
  let halfIndex = string.length / 2;
  let firstHalf = string.substring(0, halfIndex);
  let secondHalf = string.substring(halfIndex, string.length);
  alert(`${secondHalf}${firstHalf}`);
}

// reverseHalves(prompt("give me a sentence", "hello world!"));

//Takehome 5
function isPalindrome(string) {
  let reversed = string
                    .split('') //returns an array
                    .reverse() //ONLY WORKS on arrays
                    .join('')  //returns a string
  return string === reversed;
}

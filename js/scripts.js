//Collect name

let favColor = Prompt('give me your fav color', '...');

switch(favColor.upperLowerCase()) { //normalize the data
  case 'blue':  
    alert(`${favColor} is my favorite too!`);
    break;
  //...
  default: 
    alert(`Hey ${name}, that's not a valid option.`);
    break;
}

// step 1
let todos = [];

let todo1 = [prompt("What do you want to do first?", "Eat")];
let todo2 = [prompt("What do you want to do second?", "Eat")];
let todo3 = [prompt("What do you want to do third?", "Eat")];

// //THIS IS A GOOD PLACE FOR EDGE CASING
todos.push(todo1, todo2, todo3);

// Step 2
for(let i = 0; i < todos.length; i++) {

  let timeline = prompt(`How many days will it take to get ${todos[i][0]} done?`, "2");

  timeline = !isNaN(parseInt(timeline)) ? parseInt(timeline) : 2;

  todos[i].unshift(timeline);
}
// console.log(todos, 'after adding time it will take');

todos.sort();
// console.log(todos, 'after sort');
// 



let longest = todos[0];
let j = 0;
while(j < todos.length) {
  if(todos[j][0] > longest[0]) longest = todos[j]; //valid inline if statement
  // longest = todos[j][0] > longest[0] ? longest = todos[j] : longest = longest; //TERNARY VERSION
  // console.log(todos[j][1]);
  j++;
}
longest.push('this');
// 
// 
// 
// 
let z = 0;
do {
  if(todos[z][todos[z].length - 1] !== "this") {
    todos[z].push("done");
  }
  z++;
}while(z < todos.length);

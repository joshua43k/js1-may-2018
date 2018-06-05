let arr = ["javascript", 100, {}, [], true];
// console.log(arr[6]);

//Try it out #1
let favs = ["Rogue One", 51, true, "Rogue One", 2004];
favs.sort();
// console.log(favs);
// favs.splice(2); //one arg will remove that index and everything after.
// favs.splice(2, 1); // with 2 args you start removing items at the first argument (index) and then remove only the number of items that you passed in as teh second argument (delete count).
// console.log(favs, 'before');
// let removedItems = favs.splice(2, 2, false, "Faith", "Rocky");
// console.log(favs, "this is the result of splice");
// console.log(removedItems, 'the thing that we removed');



// alert(products[0][1][1]);
// let copy = products.slice();
let favMovie = ["Empire Strikes Back", "Darth Vader"];
let secondFav = ["Return of the King", "Bill the Pony"];
let thirdFav = ["The Room", "Lisa"];

let favoriteMovies = [];

favoriteMovies.push(favMovie, secondFav, thirdFav);

let titles = [];
titles.push(favoriteMovies[0][0], favoriteMovies[1][0]);
// console.log(favs.lastIndexOf("Rogue One"));

let products = [["blanket", [12.99], "The best blanket around."], ['rattle', 4.99, "It rattles man..."], ['diapers', 12.99, 'They catch the doo doo']];

// let i = 0; //control statement

// while (i < products.length) { //parameters
//     // console.log(products[i]);
//     i++; //Incrementor
// }

// console.log(i);


for(let i = products.length - 1; i >= 0; i--) {
  console.log(products[i]);
}




//while loop
let i = 0;
let newProduct = ["Squeeky Toy", 19.99, "Really good toy."];
do {
  //Add newProduct to the second member of products array
  if(i === 1) products[i].push(newProduct);
  i++;
} while(i < products.length);

// console.log(products);


products.forEach((product) => {
  console.log(product);
});








//

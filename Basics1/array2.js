const marvelHeroes = ["Thor", "Ironman", "Spiderman"];
const dcHeroes = ["Batman", "Superman", "Flash"];

// marvelHeroes.push(dcHeroes); // pushes to existing array as a single element

// console.log(marvelHeroes);

// const allHeroes = marvelHeroes.concat(dcHeroes); // concats two arrays and returns a new array
// console.log(allHeroes);

// SPREAD OPERATOR //
const allHeroes = [...marvelHeroes, ...dcHeroes];
// console.log(allHeroes);

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const flatArray = anotherArray.flat(Infinity);
// console.log(flatArray);

// console.log(Array.isArray("Arka"));
// console.log(Array.from("Arka"));
// console.log(Array.from({name : "arka"})); // returns empty array(interesting)

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
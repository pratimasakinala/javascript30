// start with strings, numbers and booleans
// let age = 100,
//   age2 = age;
// console.log(age, age2);
// age = 200;
// console.log(age, age2);
//
// let name = "Pratima",
//   name2 = name;
// console.log(name, name2);
// name = "Sakinala";
// console.log(name, name2);

// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// and we want to make a copy of it.
let team = players;
console.log(players, team);

// You might think we can just do something like this:
team[3] = "Lux";
console.log(players, team);

// team is a reference to players array. So when we change team we are changing players.

// however what happens when we update that array?


// now here is the problem!

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!
let team2 = players.slice();
console.log(team2);

// one day

// or create a new array and concat the old one in
let team3 = [].concat(players);

// or use the new ES6 Spread
let team4 = [...players];
team4[3] = "hee haa";
console.log(players, team4);

let team5 = Array.from(players);
team5[3] = "cool";
console.log(players, team5);

// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
  name: 'Pratima',
  age: 26
}

// and think we make a copy:
// const captain = person;
// captain.number = 99;

// how do we take a copy instead?
const cap2 = Object.assign({}, person, {number: 99});
console.log(cap2);

// We will hopefully soon see the object ...spread
// const cap3 = {...person}; // in react
// console.log(cap3);

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
const Pratima = {
  name: 'Pratima',
  age: 26,
  social: {
    twitter: '@pratima',
    facebook: 'pratimasakinala'
  }
}

const dev = Object.assign({}, Pratima);
dev.name = "Sakinala";
console.log(dev);

console.clear();

dev.social.twitter = '@coolman';
console.log(dev.social);
console.log(Pratima.social);

const dev2 = JSON.parse(JSON.stringify(Pratima));

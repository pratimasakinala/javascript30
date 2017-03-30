const dogs = [
  { name: 'Snickers', age: 2 },
  { name: 'hugo', age: 8 }
];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
console.log('hello');

// Interpolated
console.log('Hello I am a %s string!', 'simple');

// Styled
console.log('%c I am some great text', 'font-size: 50px; background-color: red;');

// warning!
console.warn('Oh nooo!');

// Error :|
console.error('Shit!');

// Info
console.info('Crocodiles eat 3-4 people per year');

// Testing
// This will only run if the condition is not true
console.assert(1 == 2, 'That is wrong!');

// clearing
console.clear();

// Viewing DOM Elements
const p = document.querySelector('p');
console.log(p);
console.dir(p);

// Grouping together
dogs.forEach(dog => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`);
});

// counting
console.count('Pratima');
console.count('Pratima');
console.count('Nihar');
console.count('Nihar');
console.count('Pratima');
console.count('Nihar');
console.count('Nihar');

// timing
console.time('fetching data');
fetch('https://api.github.com/users/webos')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('fetching data');
    console.log(data);
  });

console.table(dogs);

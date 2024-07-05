const constellations = ['Orion', 'Scorpius', 'Lyra', 'Ursa Major', 'Ursa Minor'];
const planets = ['Earth', 'Saturn', 'Mars', 'Jupiter', 'Uranus', 'Venus'];
const star = 'polaris';

// WRITE YOUR CODE BELOW
constellations.unshift('Canis Major');

console.log(constellations);

let newArray = planets.slice(0, 5);

console.log(
    newArray
);

const newSpace = constellations.concat(planets);

console.log(
    newSpace
);

const capsStar = star.toUpperCase();
console.log(
    capsStar
);

console.log(
    typeof planets
);

const array = [
    2,
    3,
    4
]

console.log(
    typeof array
);
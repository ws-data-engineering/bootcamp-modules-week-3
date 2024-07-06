// TODO: What does 'this' refer to?

// Refers to the global object.

console.log(this);

// TODO: What does 'this' refer to?

// When used in a function, the this keyword simply points to an object to which it is bound. It answers the question of where it should get some value or data from


function helloThis() {
  console.log(`Inside this function, this is ${this}`);
}

// TODO: What will this log?

// 20 years old for the age.

const child = {
  age: 10,
  ageTenYears: function () {
    console.log(this.age + 10);
  },
};

// TODO: What will this log?

// 5750

const investor = {
  name: 'Cash Saver',
  investment: {
    initialInvestment: 5000,
    investmentGrowth: function () {
      console.log(this.initialInvestment * 1.15);
    },
  },
};

// TODO: After commenting, check your results!
helloThis();

// TODO: After commenting, check your results!
child.ageTenYears();
investor.investment.investmentGrowth();


// Array for random selection
const values = [
  2, 3, 5, 10, 1000, "Great", true
];

function randomNumber() {
  console.log(values[(Math.floor(Math.random() * values.length))])
}

randomNumber();
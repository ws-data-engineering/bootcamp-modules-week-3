// isEqual using function declaration
function isEqual(x, y) {
  if (x === y) {
    console.log('They are equal in type and value');
  } else if (x == y) {
    console.log('They are equal in value');
  } else {
    console.log('They are not equal');
  }
  return;
}

// Logs 'They are equal in type and value'
isEqual(num1=10, num2=10);

// Refer to sample functions as needed!

// TODO: Call the isEqual function so that it logs 'They are equal in value'
isEqual('10', 10);

// TODO: Rewrite isEqual as a function expression called 'isEqualTakeTwo`
const isEqualTakeTwo = function(x, y) {
  if (x === y) {
    console.log('They are equal in type and value');
  } else if (x == y) {
    console.log('They are equal in value');
  } else {
    console.log('They are not equal');
  }
  return;
}
// TODO: Call the isEqualTakeTwo function so that it logs 'They are not equal'
isEqualTakeTwo(33, 77);

// Written as an arrow function
let isEqualTakeThree = (x, y) => {
  if (x === y) {
    console.log('They are equal in type and value');
  } else if (x == y) {
    console.log('They are equal in value');
  } else {
    console.log('They are not equal');
  }
  return;
}

isEqualTakeThree(99, "Friend");



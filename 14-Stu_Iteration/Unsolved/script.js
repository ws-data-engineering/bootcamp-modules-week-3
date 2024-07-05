// WRITE YOUR CODE BELOW
const studentNames = [
    "Lisa",
    "Rick",
    "Jasmine",
    "Megan",
    "Bad Bunny"
];

function studentGreetings(names=studentNames) {
    // for loop
    for (let i = 0; i < names.length; i++) {
        console.log(
            `Great to see you, ${names[i]}`
        );
    }
    // for of loop
    for (const name of names) {
        console.log(
            `Great to see you, ${name}`
        );
    }
    // while loop
    let n = 0;
    while (n < studentNames.length) {
        console.log(
            `Great to see you, ${studentNames[n]}`
        );
        n++;
    }
};

studentGreetings();

// For of loop : returns the element
// For in loop : returns the index
// WRITE YOUR CODE HERE
const studentNames = [
    "Pete",
    "Brian",
    "Carlo",
    "Tim",
    "Nancy",
    "Deb"
];

function welcomeStudents(names=studentNames) {
    for (let i = 0; i < names.length; i++) {
        if (names[0] == "Pete") {
            names[0] = "Sacha"
        } 
        console.log(
            `Welcome to the class, ${names[i]}!`
        )
    }
    return;
};

welcomeStudents();

// Bonus
console.log(
    studentNames[studentNames.length - 1]
);



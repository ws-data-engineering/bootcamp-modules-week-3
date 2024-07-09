// Write Your JavaScript Code Here
const introductionSelf = {
    personName: "Will",
    pets: "one",
    funFact: "dogs are better than cats!"
};

const introductionPartner = {
    personName: "Partner",
    pets: "three",
    funFact: "I've vacationed in Spain"
};

function ourIntroduction(responses=[introductionSelf, introductionPartner]) {
    console.log(
        `My name is ${responses[0].personName}. I have ${responses[0].pets} pets. Fun fact: ${responses[0].funFact}.`,
        `My name is ${responses[1].personName}. I have ${responses[1].pets} pets. Fun fact: ${responses[1].funFact}.`
    );
    console.log(
        "Our names are" + " " + (responses[0].personName) + " and " + (responses[1].personName)
    )

};

ourIntroduction();


const pets = "Dog", personName = "Name", funFact = "Hello";

console.log(pets);
console.log(personName);
console.log(funFact);



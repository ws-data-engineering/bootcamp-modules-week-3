// Change the values and operators below to test your algorithm meets all conditions
const x = 50;
const expression1 = (x < 25);
const expression2 = (x > 50);

// Write Your JavaScript Code Here
function evaluateExpressions(num=x, ex1=expression1, ex2=expression2) {
    if (!ex1 && !ex2) {
        console.log(`False X False X`);
    } else if(!ex1 && ex2) {
        console.log(`False X True (Check mark)`);
    } else if(ex1 && !ex2) {
        console.log(`True (Check mark) False X`);
    } else {
        console.log(`True (Check mark) True (Check mark)`);
    }
    return;
};

evaluateExpressions();

a = 10;
b = 20;

switch (a != b) {
    case true:
        console.log(`a not equal to b`);
        break;
    case false:
        console.log(`both are equal`);
        break;
    default:
        console.log(`invalid inputs`);
        break;
}

// WRITE YOUR CODE BELOW

const customerDrinks = {
    drink: [
        "Latte", "Coffee", "Espresso", "Americano"
    ],
    sugars: [
        0, 3, 1, 2
    ],
    readyState: [
        true, false, true, false
    ],
    drinkCall: function (drinkIndex) { 
        if (this.readyState[drinkIndex]) {
            console.log(
                `Ready for pick-up. ${this.drink[drinkIndex]}. ${this.sugars[drinkIndex]} sugars added.`
            );
        } else if (!this.readyState[drinkIndex]) {
            console.log(
                `${this.drink[drinkIndex]} with ${this.sugars[drinkIndex]} sugars is still in the order queue`
            )
        }
        return;            
    },
    allStatus: function () {
        const status = new Array(Object.values(this["readyState"]));   
        for (let i = 0; i < status[0].length; i++) {
            if (status[0][i]) {
                console.log(
                    `${this.drink[i]} with ${this.sugars[i]} sugars is ready for pick-up.`
                );
            } else if (!status[0][i]) {
                console.log(
                    `${this.drink[i]} with ${this.sugars[i]} is still in the order queue.`
                );
            }
        }
    }
};

// Added a argument to get the status of a single drink
customerDrinks.drinkCall(0);

// Function to get the status of all drinks 
customerDrinks.allStatus();
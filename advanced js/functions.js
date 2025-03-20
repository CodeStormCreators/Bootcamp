const person = {
    name: "Nikita",
    normalFunction: function () {
        console.log("Normal function:", this.name);
    },
    arrowFunction: () => {
        console.log("Arrow function:", this.name);
    },
};

person.normalFunction(); // Output: Normal function: Nikita
person.arrowFunction(); // Output: Arrow function: undefined

const person1 = {
    name: "Nikita",
    greet: function () {
        setTimeout(() => {
            console.log(`Hello, ${this.name}`);
        }, 1000);
    },
};

person1.greet(); // Output: Hello, Nikita




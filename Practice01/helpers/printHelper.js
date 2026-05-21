//say heelo to the world
//This is a helper function that will be imported in the main file
//exporting the function so it can be used in other files
export function sayHelloWorld() {
    console.log("Hello, World from an external module!");
}


//fuction to sum two numbers
export function sum(a, b) {
    return a + b;
}

//function to multiply two numbers
export function multiply(a, b) {
    return a * b;
}


//Adding a class with a method to the module
export class Calculator {
    constructor() {
        // constructor code if needed
    }

    add(a, b) {
        return a + b;
    }

    multiply(a, b) {
        return a * b;
    }
}





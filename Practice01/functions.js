//functions are used to perform a specific task, they are reusable and can be called
//  multiple times in a program

//fuction without parameters
function sayHello() {
    console.log("Hello, World!");
}
sayHello(); // calling the function

//Anonymous function assigned to a variable
const sayHi = function() {
    console.log("Hi, there!");
}
sayHi(); // calling the anonymous function

//ES6 arrow function
const sayHey = () => {
    console.log("Hey, everyone!");
}
sayHey(); // calling the ES6 arrow function

//function with arguments or parameters
function greet(name) {
    console.log("Hello, " + name + "!");
}
greet("Alice"); // calling the function with an argument

//function expression
const greet2 = function(name) {
    console.log("Hello, " + name + "!");
}
greet2("Bob"); // calling the function expression

//arrow function
const greet3 = (name) => {
    console.log("Hello, " + name + "!");
}

greet3("Charlie"); // calling the arrow function

//fuction with more than one parameter
function add(a, b) {
    return a + b;
}
console.log("Sum of 5 and 3 is: " + add(5, 3)); // calling the function with two arguments

//function with default parameters
function greet4(name = "Guest") {
    console.log("Hello, " + name + "!");
}
greet4(); // calling the function without an argument, it will use the default parameter
greet4("Dave"); // calling the function with an argument, it will override the default parameter

//function with rest parameters
function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log("Sum of 1, 2, 3, 4 is: " + sum(1, 2, 3, 4)); // calling the function with multiple arguments

//function with return statement
function multiply(a, b) {
    return a * b;
}
// calling the function with two arguments and using the return value
console.log("Product of 5 and 3 is: " + multiply(5, 3)); // calling the function with two arguments and using the return value
//calling the function with two arguments and storing the return value in a variable
const product = multiply(5, 3);
console.log("Product of 5 and 3 is: " + product); // using the stored return value

//calling a function from another module is a common practice in JavaScript, 
// it allows us to organize our code and reuse functions across different files.
import { sayHelloWorld } from "./helpers/printHelper.js"; // importing the function from the external module
sayHelloWorld(); // calling the imported function

//importing everight from the module
import * as printHelper from "./helpers/printHelper.js"; // importing everything from the module
printHelper.sayHelloWorld(); // calling the function from the imported module using the namespace

//sum and multiply functions from the module
console.log("Sum of 5 and 3 is: " + printHelper.sum(5, 3)); // calling the sum function from the imported module
// calling the multiply function from the imported module with dot notation
printHelper.multiply(5, 3); // calling the multiply function from the imported module


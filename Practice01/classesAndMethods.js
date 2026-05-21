import * as printHelper from "./helpers/printHelper.js"; // importing the printHelper module

//Using the imported functions and class from the printHelper module
printHelper.sayHelloWorld(); // calling the sayHelloWorld function from the imported module

var calc = new printHelper.Calculator(); // creating an instance of the Calculator class
console.log("Sum of 5 and 3 is: " + calc.add(5, 3)); // calling the add method from the Calculator class
console.log("Product of 5 and 3 is: " + calc.multiply(5, 3)); // calling the multiply method from the Calculator class
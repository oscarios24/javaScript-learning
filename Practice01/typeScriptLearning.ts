//declare variables with types using var, let, or const
//To see the differences with javaScript, you can try declaring variables without types 
// and see how TypeScript gives you errors when you try to use them in ways that are not 
// compatible with their inferred types.
let message: string = "Hello, TypeScript!";
const pi: number = 3.14159;
var isTypeScriptFun: boolean = true;

//function with typed parameters and return type
function greet(name: string): string {
    return `Hello, ${name}!`;
}

//using the function
console.log(greet("Oscar"));

//adding an object type 
type Customer = {
    name: string;
    age: number;
    isPremium: boolean;
};

//creating an object of type Customer
let customer1: Customer = {
    name: "Alice",
    age: 30,
    isPremium: true
};

//function that takes a Customer object as a parameter
//adding void return type to indicate that this function does not return anything
function printCustomerInfo(customer: Customer): void {
    console.log(`Name: ${customer.name}, Age: ${customer.age}, Premium Member: ${customer.isPremium}`);
}

//using the function to print customer information
printCustomerInfo(customer1);
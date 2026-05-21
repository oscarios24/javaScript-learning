console.log("Loops in JavaScript");
var cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

// for loop to iterate through the array old way
for (var i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}

// forEach loop
cars.forEach(function(car) {
    console.log(car);
});

// for...of loop to iterate through the array new way 
// for...of loop is a new way to iterate through the array in JavaScript. 
// It is more concise and easier to read than the traditional for loop.
//  It is also more efficient than the forEach loop because 
// it does not create a new function for each iteration.
for (var car of cars) {
    console.log(car);
}

//new examples using for...of loop
var numbers = [1, 2, 3, 4, 5];
for (var number of numbers) {
    console.log(number);
}

var fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
for (var fruit of fruits) {
    console.log(fruit);
}
//function to calculate the sum of an array using for...of loop
function sumArray(arr) {
    var sum = 0;
    for (var num of arr) {
        sum += num;
    }
    return sum;
}
var numbers = [1, 2, 3, 4, 5];
console.log("Sum of numbers: " + sumArray(numbers));
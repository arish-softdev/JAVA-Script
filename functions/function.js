// Functions in js
// Function Declaration:

// function greet(name) {
//     console.log("Hi," + name + "!");
    
// }

// greet("Soldiers");
// greet("Bro");

// Function Expression:

// const greet = function(name) {
//     console.log("Hi," + name + "!");
    
// }

// greet("Soldiers");
// greet("Bro");

// Arrow function:

// const greet = (name) => {
//     console.log("Hi," + name + "!");
    
// }

// greet("Soldiers");
// greet("Bro");

// Function with Return Value:

// function addNumbers(a, b) {
//     return a + b;
// }

// const result = addNumbers(5, 5);
// console.log(result);

// Function with Default Parameters:

function greet(name = "guest") {
    console.log("Hi," + name + "!");
    
}

greet();
greet("Master");
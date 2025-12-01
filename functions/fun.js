// Functions in JavaScript
// Ex1 Add two numbers

// function add(a, b) {
//     return a + b;
// }

// console.log(add(5, 3));

// Ex2 Check if a number is even or odd

// function checkEvenOdd (num) {
//     if (num % 2 === 0) {
//         return "Even";
//     }
//     return "Odd";
// }

// console.log(checkEvenOdd(7));

// Ex3 Find a square of a number

// function square(n) {
//     return n * n;

// }

// console.log(square(6));

// Ex4 Returns the largest of two numbers

// function largest (a, b) {
//     return a > b ? a : b;
// }

// console.log(largest(10, 20));

// Ex5 Takes a name and prints a greeting

// function greet(name) {
//     return "Hello, " + name + "!";

// }

// console.log(greet("Arish"));

// Ex6 Calculate the factorial of a number

// function factorial(n) {
//     let fact = 1;

//     for (let i = 1; i <= n; i++) {
//        fact *= i; 
//     }

//     return fact;
// }

// console.log(factorial(5));

// Ex7 Reverse a string

function reverseString(str) {
    return str.split("").reverse().join("");

}

console.log(reverseString("hello"));

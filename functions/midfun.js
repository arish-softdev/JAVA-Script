// Functions in JavaScript

// function add(a, b) {
//     return a + b;
// }

// console.log(add(5, 10));

// Ex1

// const greet = () => "Now it's my turn";

// console.log(greet());

// Ex2

// const add = (x, y) => x + y;

// console.log(add(3, 4));

// Ex3

// let checkEvenOdd = (n) => (n % 2 === 0 ? "Even" : "Odd");

// console.log(checkEvenOdd(7));

// Ex4

// const square = (num) => num * num;

// console.log(square(6));

// Ex4

// let printName = () => console.log("Arish");

// printName();

// Ex5

// const largest = (a, b) => (a > b ? a : b);

// console.log(largest(10, 20));

// Ex6

const countV = (str) => {
    let vewels = "aeiouAEIOU";
    let count = 0;

    for (let char of str) {
        if (vewels.includes(char)) count++;
    }

    return count;
};

console.log(countV("JavaScript"));
console.log(countV("AquaMarineHoshino"));
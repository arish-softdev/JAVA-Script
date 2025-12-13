// Filter Array Method in JavaScript

// Ex1 Even Nums

let numbers = [1, 2, 3, 4, 5, 6];
let even = numbers.filter(num => num % 2 === 0);

console.log(even);

// Ex2

let names = ["Lemon", "Yanami", "Sayori", "Asuna"];

let longNames = names.filter(name => name.length > 5);

console.log(longNames);

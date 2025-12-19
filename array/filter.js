// Filter Array Method in JavaScript

// // Ex1 Even Nums

// let numbers = [1, 2, 3, 4, 5, 6];
// let even = numbers.filter(num => num % 2 === 0);

// console.log(even);

// Ex2 Length

// let names = ["Lemon", "Yanami", "Sayori", "Asuna"];

// let longNames = names.filter(name => name.length > 5);

// console.log(longNames);

// Ex3 Positive nums

// let nums = [-3, 5, -7, 1, 0];

// let positive = nums.filter(n => n > 0);

// console.log(positive);

// Negative

// let num = [-3, 5, -7, 1, 0];

// let negative = num.filter(n => n < 0);

// console.log(negative);

// Ex4 Greater Nums

let nums = [5, 12, 8, 20, 3];

let result = nums.filter(n => n > 10);

console.log(result);

// Ex5

let users = [
    { name: "Aqua", active: true },
    { name: "Ayano", active: false },
    { name: "Cid", active: true }
];

let activeUsers = users.filter(user => user.active);

console.log(activeUsers);

// Ex6 
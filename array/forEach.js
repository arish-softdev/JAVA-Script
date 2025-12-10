// ForEach array methods in javascript

// Ex1

// let nums = [10, 20, 30, 40];

// nums.forEach(function(n) {
//     console.log(n);
    
// });

// Ex2

// let letters = ["a", "b", "c"];

// letters.forEach(function(value, index) {
//     console.log(index, value);
    
// });

// Ex3

// let arr = [5, 10, 45];
// let sum = 0;

// arr.forEach(function(num) {
//     sum += num;
// });

// Ex4

// let names = ["Scarlet", "Shina", "Hima"];

// names.forEach(function(fem) {
//     console.log(fem.toUpperCase());
    
// });

// Ex5

// let nums = [1, 2, 3, 4];

// nums.forEach(function(n) {
//     console.log(n * 2);
    
// });

// Ex6 

// let numbers = [11, 22, 33, 44, 55];

// numbers.forEach(function(n) {
//     if (n % 2 === 0) {
//         console.log(n);
        
//     }
// });

// Ex7

let people = ["Ai", "Aqua", "Ruby", "Kana", "Akane", "Memcho"];
let count = 0;

people.forEach(function(name) {
    if (name.length > 4) {
        count++;

    }
})

console.log(count);

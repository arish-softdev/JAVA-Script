// Array in javascript

// let animes = ["dragonball", "onepiece", "naruto"];
// console.log(animes);

// Ex2 Array

// let oshinoko = ["Ai", "Aqua", "Ruby", "Kana", "Akane"];

// console.log(oshinoko[2]);

// Ex3 Array

// let info = [name='robin', age=19, city='vadalur'];

// console.log(info);

// Ex4 change array value

// let fruits = ["apple", "orange", "banana"];
// fruits[2] = "grapes";

// console.log(fruits);

// Ex5 Find length of array

// let colors = ["red", "green", "black", "blue"];

// console.log(colors.length);

// Ex6 add element

// let colors = ["red", "green", "black", "blue"];
// colors.push("pink");

// console.log(colors);

// Ex7 Remove first element

// let nums = [10, 20, 30, 40];
// nums.shift();

// console.log(nums);

// Ex8 Remove last elemenet

// let nums = [10, 20, 30, 40];
// nums.pop();

// console.log(nums);

// Ex9 Check if element exists

// let pets = ["dog", "cat", "parrot"];

// console.log(pets.includes("cat"));

// Ex10 Add element to the beginning

// let colors = ["red", "black", "blue"];
// colors.unshift("gold");

// console.log(colors);

// Ex11 Largest number

// let arr = [10, 50, 20, 40];
// console.log(Math.max(...arr));

// Ex12 Smallest number

// let arr = [10, 50, 20, 40];
// console.log(Math.min(...arr));

// Ex13 Sum of all values

// let arr = [1, 2, 3, 4];
// let sum = arr.reduce((a, b) => a + b, 0);

// console.log(sum);

// Ex14 Count even numbers

// let arr = [1, 2, 3, 4, 5, 6];
// let count = arr.filter(num => num % 2 === 0).length;

// console.log(count);

// Ex15 Count odd numbers

let arr = [1, 2, 3, 4, 5, 6, 7];
let count = arr.filter(num => num % 2 !== 0).length;

console.log(count);
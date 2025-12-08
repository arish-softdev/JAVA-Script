// Array method in javascript 

// let arr = [1, 2, 3];
// arr.push(4);
// console.log(arr); 

// Ex2 

// let arr = [5, 10, 15];
// arr.shift();  

// Ex3 

// let fruits = ["apple", "banana", "mango"];
// console.log(fruits.join(",")); 

// Ex4

// let arr = [1, 2, 3, 4, 5, 6];
// let evens = arr.filter(n => n % 2 === 0);

// console.log(evens);

// Ex5

// let arr = [10, 20, 30];
// arr.splice(1, 1); // Remove 1 item at index 1

// console.log(arr);

// Ex6

// let arr = [10, 55, 60, 22];
// let ans = arr.find(n => n > 50);

// console.log(ans);

// Ex7

// let arr = [7, 1, 8, 2, 4];
// arr.sort((a, b) => b - a);

// console.log(arr);

// Ex8

// let a = ["b", "a", "c"];

// console.log(a.sort());

// Ex9

// let nums = [1, 2, 3, 4];

// let doubled = nums.map(n => n * 2);

// console.log(doubled);

// Ex10

// let nums = [1, 2, 3, 4, 5, 6];

// let evens = nums.filter(n => n % 2 === 0);

// console.log(evens);

// Ex11

// let nums = [10, 20, 30];

// let total = nums.reduce((acc, n) => acc + n, 0);

// console.log(total);

// Ex12

// let nums = [10, 20, 60, 5, 70];

// let result = nums.find(n => n > 50);

// console.log(result);

// Ex13

// let nums = [3, 5, -2 ,7];

// let hasNagative = nums.some(n => n < 0);

// console.log(hasNagative);

// Ex14

// let nums = [5, 10, 15];

// let allPositive = nums.every(n => n > 0);

// console.log(allPositive);

// Ex15

// let values = [1, 2, 3];

// values.forEach(n => console.log(n * 10));

// Ex16

// let name = ["Scarlet", "Aurora", "Marin", "Zero Two", "Yor"];

// let upper = name.map(w => w.toUpperCase());

// console.log(upper);

// Ex17

// let names = ["Yor", "Ai", "Alya", "Ruby", "Kana", "Akane", "Marin", "Scarlet", "Aurora"];

// let longNames = names.filter(name => name.length > 4);

// console.log(longNames);

// Ex18

// let nums = [12, 50, 20, 7];

// let max = nums.reduce((a,b) => a > b ? a : b);

// console.log(max);

// Ex19

let users = [
    { name: "Arish", age: 19 },
    { name: "Venkat", age: 19},
    { name: "Arun", age: 25}
];

let names = users.map(u => u.name);


console.log(names);
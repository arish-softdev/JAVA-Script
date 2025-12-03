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

let nums = [10, 20, 30];

let total = nums.reduce((acc, n) => acc + n, 0);

console.log(total);

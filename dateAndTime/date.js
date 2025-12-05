// Dates and Times in JavaScript

// const currentDate = new Date();

// console.log(currentDate);

// 

const currentDate = new Date();
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1;
const day = currentDate.getDate();
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();


console.log("Current Date:", year + "-" + month + "-" + day);
console.log("Current Time:", hours + ":" + minutes + ":" + seconds);


// let promise = new Promise((resolve, reject) => {
//     resolve("Succes");
// });

// console.log(promise);

// Ex1

// let p = new Promise((resolve, reject) => {
//     resolve(10);
// });

// p.then(value => value * 2)
// .then(value => console.log(value));

// promise.then(result => {
//     console.log(result);

// }).catch(error => {
//     console.log(error);

// });

// EX3

// let pro = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Done"), 2000);
// });

// console.log("Start");
// pro.then(res => console.log(res));
// console.log("End");

// Ex4

// let promise = new Promise((resolve, reject) => {
//     let success = true;

//     if (success) {
//         resolve("Promise resolved successfully");
//     } else {
//         reject("Promise rejected");
//     }
// });

// promise
// .then(result => console.log(result))
// .catch(error => console.log(errorr));

// Ex5

// let myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Data loaded after 2 seconds");
//     }, 2000);
// });

// myPromise.then(data => console.log(data));

// Ex6

// let numberPromise = new Promise((resolve) => {
//   resolve(5);
// });

// numberPromise
//   .then((num) => num * 2)
//   .then((result) => result + 3)
//   .then((finalResult) => console.log(finalResult));

// Ex7

// let ageCheck = new Promise((resolve, reject) => {
//   let age = 15;

//   if (age >= 18) {
//     resolve("Access granted");
//   } else {
//     reject("Access denied");
//   }
// });

// ageCheck 
//   .then(msg => console.log(msg))
//   .catch(err => console.log(err));

// Ex8

function getData() {
  return new Promise((resolve, reject) => {
    let dataAvailable = false;

    if (dataAvailable) {
      resolve("Here is your data");
    } else {
      reject("No data found");
    }
  });
}

getData()
  .then(data => console.log(data))
  .catch(err => console.log(err));
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


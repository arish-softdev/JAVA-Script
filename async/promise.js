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

// 

let pro = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Done"), 2000);
});

console.log("Start");
pro.then(res => console.log(res));
console.log("End");




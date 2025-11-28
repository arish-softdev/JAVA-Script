// Object in Javascript

// Ex1

// const person = {
//     name: "Arish",
//     age: 19,
//     profession: "Developer"
// };

// console.log(person.name);
// console.log(person.age);
// console.log(person.profession);

// Ex2 

// const person = new Object();
// person.name = "Arish";
// person.age = 19;
// person.profession = "Developer";

// console.log(person.name);
// console.log(person.age);
// console.log(person.profession);

// Ex3

// const person = {
//     name: "Robin",
//     age: 22,
//     profession: "Hunter"
// };

// const propertyName = "age";
// console.log(person[propertyName]);

// const prifessionKey = "profession";
// console.log(person.professionKey);

// Ex4

// let person = {
//     name: "Arish",
//     age: 19,
//     profession: "Developer"
// };

// person.age = 22;
// console.log(person.age);

// person["profession"] = "Designer";
// console.log(person.profession)

// Ex5

// let user = { name: "Arish", age: 19};
// user.country = "India";

// console.log(user);

// Ex6

// let car = { brand: "BMW", model: "X5", year: 2019};
// delete car.year;

// console.log(car);

// Ex7

let laptop = { brand: "acer", ram: "16GB" };

console.log("ram" in laptop);
console.log("processor" in laptop);
// JSON in Javascript
// Ex1

// let person = {
//     name: "Arish",
//     age: 19,
//     city: "Vadalur"
// };

// let jsonString = JSON.stringify(person);
// console.log(jsonString);

// Ex2

const jsonString = '{"name":"Arish", "age":30, "city":"Vadalur"}';

const person = JSON.parse(jsonString);
console.log(person.name);
console.log(person.age);
console.log(person.city);


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

let person = {
    name: "Arish",
    age: 19,
    profession: "Developer"
};

person.age = 22;
console.log(person.age);

person["profession"] = "Designer";
console.log(person.profession)

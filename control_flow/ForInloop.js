// For...In Loop in javascript

const person = {
    name: "Cid",
    age: 25,
    profession: "Developer"
};

for (let key in person) {
    console.log(key + ":" + person[key]);
    
}
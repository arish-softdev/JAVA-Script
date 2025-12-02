// Closure in JavaScript

// function createCounter() {
//     let count = 0;

//     function increment() {
//         count++;
//         console.log(count);
        
//     }

//     return increment;
// }

// const counter = createCounter();

// counter();
// counter();
// counter();
// counter();
// counter();
// counter();
// counter();
// counter();
// counter();
// counter();
// counter();
// counter();
// counter();

// 

function createCounter() {
    let count = 0;

    function decrement() {
        count--;
        console.log(count);
        
    }

    return decrement;
}

let counter = createCounter();

counter();
counter();
counter();
counter();

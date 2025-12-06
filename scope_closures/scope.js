// Scope in JavaScript
// Global Scope

// const message = "Welcome to demon school..!";

// function showMessage() {
//     console.log(message);
    
// }

// showMessage();

// Local Scope

// function showMessage() {

//     let message = "The Death March";
//     console.log(message);
    
// }

// showMessage();
// console.log(message);

// Function Scope 

// function display() {
//     if (true) {
//         let message = "Way back home";
//         console.log(message);
        
//     }
// }

// display();
// console.log(message);

// Block Scope

// {
//     let message = "Nobody";
//     console.log(message);
    
// }

// console.log(message);

// Lexical Scope

function outerFunction() {
    let message = "Ara Ara, ";

    function innerFunction() {
        console.log(message + "Sayonara!");
        
    }

    innerFunction();
}

outerFunction();
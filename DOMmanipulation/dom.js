// DOM Manipulation in Javascript

// Accesing Elements by ID
const heading = document.getElementById("myhead");
heading.textContent = "Social Media";

// Accesing Elements by Class
let paragraphs = document.getElementsByClassName("my Para");
for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].textContent = "Time is Money" + (i + 1);
}

// Accesing Elements by Tag Name
let listBox = document.getElementsByTagName("li");
for (let i = 0; i < listBox.length; i++) {
  listBox[i].textContent = "New Box" + (i + 1);
}

// Modifying Element Styles
let myElement = document.getElementById("myElement");
myElement.style.backgroundColor = "red";
myElement.style.color = "white";

// Creating New Elements
let newParagraph = document.createElement("p");
newParagraph.textContent = "This is a new paragraph.";
document.body.appendChild(newParagraph);
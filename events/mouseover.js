function showMsg() {
    alert("Mouse is over the text");
}

document.getElementById("text").onmouseover = () => {
    this.style.color = "red";
};
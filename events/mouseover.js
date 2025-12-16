function showMsg() {
    alert("Mouse is over the text");
}

document.getElementById("text").onmouseover = function () {
    this.style.color = "red";
};
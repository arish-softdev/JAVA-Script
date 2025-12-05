// JavaScript

function updateCurrentTime() {
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();

  var formattedTime =
    hours.toString().padStart(2, "0") +
    ":" +
    minutes.toString().padStart(2, "0") +
    ":" +
    seconds.toString().padStart(2, "0");

    document.getElementById("clock").textContent = "The current is: " + formattedTime;
}


updateCurrentTime();


setInterval(updateCurrentTime, 1000);
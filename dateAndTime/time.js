//

function updateCurrentDateTime() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.toLocaleString("default", { month: "long" });
  const day = currentDate.getDate();
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();

  const formattedDate = "Formatted Date: " + month + " " + day + ", " + year;
  const formattedTime =
    "Formatted Time: " + hours + ":" + minutes + ":" + seconds;

  document.getElementById("formattedDate").textContent = formattedDate;
  document.getElementById("formattedTime").textContent = formattedTime;
}

updateCurrentDateTime();

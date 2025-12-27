function getData() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => {
      document.getElementById("output").innerText =
        JSON.stringify(data, null, 2);
    })
    .catch(error => console.log(error));
}

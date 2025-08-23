const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", handlerName);

function handlerName(event) {
  event.preventDefault();

  const userName = event.target.value.trim();

  userName !== ""
    ? (output.innerHTML = userName)
    : (output.innerHTML = "Anonymous");
}

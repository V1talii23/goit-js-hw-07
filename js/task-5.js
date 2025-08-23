function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector(".change-color-btn");
const colorSpan = document.querySelector(".color");

button.addEventListener("click", handlerColor);

function handlerColor() {
  const randomColor = getRandomHexColor();

  document.body.style.backgroundColor = randomColor;
  colorSpan.textContent = randomColor;
}

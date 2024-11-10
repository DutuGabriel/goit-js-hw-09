const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');
let colorChangeInterval;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function startColorChange() {
  colorChangeInterval = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  startButton.disabled = true;
  stopButton.disabled = false;
}

function stopColorChange() {
  clearInterval(colorChangeInterval);
  startButton.disabled = false;
  stopButton.disabled = true;
}

startButton.addEventListener('click', startColorChange);
stopButton.addEventListener('click', stopColorChange);

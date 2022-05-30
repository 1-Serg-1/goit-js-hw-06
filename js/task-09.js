const refs = {
  body: document.querySelector('body'),
  changeColor: document.querySelector('.change-color'),
  textColor: document.querySelector('.color'),
};

refs.changeColor.addEventListener('click', changeColor);

function changeColor() {
  const currentColor = getRandomHexColor();
  refs.body.style.backgroundColor = currentColor;
  refs.textColor.textContent = currentColor
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

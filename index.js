const containerNode = document.querySelector(".container");
// const form = document.querySelector("form");
const buttonField = document.querySelector(".field")

// генерация тайлов
generateTiles();

function generateTiles(width = 16, height = 16) {
  for (let i = 0; i < width * height; i++) {
    const item = document.createElement("div");
    item.classList.add("item");
    // размер тайлов
    item.style.width = `${768 / width}px`
    item.style.height = `${768 / height}px`

    containerNode.appendChild(item);
  }
}

// заливка
containerNode.addEventListener("mouseover", changeColor);

function changeColor(e) {
  const childTarget = e.target;
  if (childTarget.className === "item")
    childTarget.style.backgroundColor = "black";
}

// форма
// form.addEventListener("submit", function (e) {
//   e.preventDefault();

//   const width = form.querySelector("#width");
//   const height = form.querySelector("#height");

//   generateMap(width.value, height.value);

//   width.value = ''
//   height.value = ''
// });

// изменение поля
buttonField.addEventListener('click', function() {
  const width = +prompt(`Type grid's width`, 64)
  const height = +prompt(`Type grid's height`, 64)
  
  generateMap(width, height)
})

// Генерация карты
function generateMap(width, height) {
  // очищаем поле
  [...containerNode.children].forEach((child) => {
    containerNode.removeChild(child);
  });

  // добавляем тайлы
  generateTiles(width, height);
}

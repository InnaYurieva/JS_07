// Задание 8
// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.
// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.
// Каждый созданный div:
// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

const btn = {
    input: document.querySelector("input"),
    add: document.querySelector('[data-action="render"]'),
    clear: document.querySelector('[data-action="destroy"]'),
    boxes: document.querySelector('#boxes')
}
console.log(btn);

//Функция принимает максимальное значение и возвращает его рандомное число (цвет)
const colorRandomize = (max = 255) => {
    return Math.round(Math.random() * max);
  };
  
  //Функция возвращает рандомный цвет
  function getRandomColor() {
      return `rgb(${colorRandomize()},${colorRandomize()},${colorRandomize()})`
  }

let boxSize = 30;
function createBoxes(amount) {
        const box = [];
        for (let i = 0; i < amount; i += 1) {
          box.push(
            `<div style="width: ${boxSize}px; height: ${boxSize}px; background-color: ${getRandomColor()}"></div>`
          );
          boxSize += 10;
        }
        btn.boxes.innerHTML = box.join(' ');
      }

btn.add.addEventListener("click", () => createBoxes(btn.input.value));
btn.clear.addEventListener("click", destroyBoxes);
function destroyBoxes (){
    btn.input.value = "";
    btn.boxes.innerHTML = "";
    boxSize = 30
}


// let createBox = () => {
//     let divBoxes = document.createElement('div')
//     btn.boxes.append(divBoxes)
//     divBoxes.style.width = '30px'
//     divBoxes.style.height = '30px'
//     divBoxes.style.backgroundColor = 'red'
// }

// createBox()

// const btnRender = document.querySelector("button[data-action='render']");
// const btnDestroy = document.querySelector("button[data-action='destroy']");

// /* значение input */
// /* доступ к input */
// const userInput = document.querySelector("input");

// const onInputChange = (event) => {
//   event.target.value;
//   // console.log(userInput.value);
// };
// userInput.addEventListener("input", onInputChange);
// // console.log(userInput);

// const createBoxes = (amount) => {
//   let divBox = "";
//   for (let i = 0; i < amount; i += 1) {
//     let rendomColor =
//       "#" + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);

//     divBox += `<div style="width: ${i * 10 + 30}px; height: ${
//       i * 10 + 30
//     }px; background-color: ${rendomColor};"></div>`;
//   }
//   boxes.insertAdjacentHTML("beforeend", divBox);
// };
// createBoxes(userInput.value);

// btnRender.addEventListener("click", () => {
//   createBoxes(userInput.value);
// });
// btnDestroy.addEventListener("click", () => {
//   boxes.innerHTML = "";
//   userInput.value = "";
// });




// const ref = {
//     input: document.querySelector("input"),
//     boxes: document.querySelector("#boxes"),
//     createBtm: document.querySelector("button[data-action='render']"),
//     destroyBtm: document.querySelector("button[data-action='destroy']"),
//   };
//   function getRandomHexColor() {
//     return `#${Math.floor(Math.random() * 16777215)
//       .toString(16)
//       .padStart(6, 0)}`;
//   }
//   ref.createBtm.addEventListener("click", () => createBoxes(ref.input.value));
//   ref.destroyBtm.addEventListener("click", destroyBoxes);
  
//   let boxSize = 30;
  
//   function createBoxes(element) {
//     const box = [];
//     for (let i = 0; i < element; i += 1) {
//       box.push(
//         `<div style="width: ${boxSize}px; height: ${boxSize}px; background-color: ${getRandomHexColor()}"></div>`
//       );
//       boxSize += 10;
//     }
//     ref.boxes.insertAdjacentHTML("afterbegin", box.join("&nbsp"));
//   }
  
//   function destroyBoxes() {
//     ref.input.value = "";
//     ref.boxes.innerHTML = "";
//     boxSize = 30;
//   }



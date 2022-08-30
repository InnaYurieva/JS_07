// Задание 7
// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

const input = document.querySelector("#font-size-control");
const span = document.querySelector("#text");
//console.log(input.value, span);

input.addEventListener("input", changeFont);
function changeFont (){
    span.style.fontSize = `${input.value}px`;
    span.style.color = 'blue'
};

// const inputRangeRef = document.querySelector("#font-size-control");
// const inputTextRef = document.querySelector("#text");

// const handleInput = () => {
//   inputTextRef.style.fontSize = `${inputRangeRef.value}px`;
// };

// inputRangeRef.addEventListener("input", handleInput);
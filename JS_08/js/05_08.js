// Задание 5
// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

const inputRef = document.getElementById("name-input");
const captionRef = document.querySelector("#name-output");

inputRef.oninput = (event) => {
  if(event.target.value.length === 0){
    captionRef.innerHTML = 'незнакомец'
    captionRef.style.color = 'red'
  } else captionRef.innerHTML = event.target.value
}


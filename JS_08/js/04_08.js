// Задание 4
// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.
// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса


const value = {
    decrease: document.querySelector("[data-action='decrement']"),
    increase: document.querySelector("[data-action='increment']"),
    span: document.querySelector('#value'),
    counter: document.querySelector('#counter'),
  };
console.log(value);
  let counterValue = 0;
  const decrease = () => {
    counterValue -= 1;
    value.span.textContent = counterValue
    //document.querySelector('#value').textContent = counterValue
  };
  
  const increase = () => {
    counterValue += 1;
    value.span.textContent = counterValue
  };
value.decrease.addEventListener('click', decrease)
value.increase.addEventListener('click', increase)

value.decrease.style.backgroundColor = 'red'
value.increase.style.backgroundColor = 'blue'


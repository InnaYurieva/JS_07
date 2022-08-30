// Задание 2
// В HTML есть пустой список ul#ingredients.
// В JS есть массив строк.
// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement().
const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

//console.log(ingredients);

for (let index = 0; index < ingredients.length; index++) {
  const element = ingredients[index];
  console.log(element);
  let ulNew = document.createElement('li')
  ulNew.innerText = element
  let showIngredients = document.querySelector('#ingredients')
  showIngredients.append(ulNew)
}



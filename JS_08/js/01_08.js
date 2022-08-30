// Задание 1
// В HTML есть список категорий ul#categories.

// Напиши скрипт, который выполнит следующие операции.
// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).
// Например для первой категории получится:
// Категория: Животные
// Количество элементов: 4

// let ulCategories = document.querySelectorAll('.item')
// //console.log(ulCategories);
// console.log(`В списке ${ulCategories.length} категории :` );

// let h2Texst = document.querySelectorAll('h2')
// console.log(h2Texst);
// for (const iterator of h2Texst) {
//     console.log(iterator);
// }
let liItem = document.querySelectorAll('li.item')
//console.log(liItem);
for (let index = 0; index < liItem.length; index++) {
    const element = liItem[index];
    const categoriesName = element.firstElementChild.textContent;
    const categoriesAmount = element.lastElementChild.children.length;
    console.log(`Категория: ${categoriesName} 
    Количество элементов: ${categoriesAmount}`);
}




// Задание 3
// Напиши скрипт для создания галлереи изображений по массиву данных.
// В HTML есть список ul#gallery.
// 
// Используй массив объектов images для создания тегов img вложенных в li. Для создания разметки используй шаблонные строки и insertAdjacentHTML().
// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.
const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
//console.log(images);
let gallery = document.querySelector('#gallery')
for(let el of images) 
gallery.insertAdjacentHTML('beforeEnd', 
`<li><img src="${el.url}" alt="${el.alt}"></li>`);





/* for (let index = 0; index < images.length; index++) {
    const element = images[index];
    console.log(element.url);
    let img = document.createElement('img')
    img.src = element.url
    let list = document.createElement('li')
    gallery.append(list)
    list.append(img)
    list.classList.add('.list')
} */

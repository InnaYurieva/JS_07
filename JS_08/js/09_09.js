// Создай галерею с возможностью клика по ее элементам и просмотра полноразмерного изображения в модальном окне.
// Разбей задание на несколько подзадач:
// Создание и рендер разметки по массиву данных и предоставленному шаблону.
// Реализация делегирования на гаелерее ul.js-gallery и получение url большого изображения.
// Открытие модального окна по клику на элменте галереи.
// Подмена значения атрибута src элемента img.lightbox__image.
// Закрытие модального окна по клику на кнопку button[data-action="close-lightbox"].
// Очистка значения атрибута src элемента img.lightbox__image. Это необходимо для того, чтобы при следующем открытии модального окна, пока грузится изображение, мы не видели предыдущее.
// Пример работы https://gitspawn.github.io/js_gallery-/
// Стартовые файлы
// В  src.zip ты найдешь стартовые файлы проекта с базовой разметкой и готовыми стилями.
// В файле gallery-items.js есть массив объектов содержащих информацию о изображениях: маленькое изображение, оригинальное и описание.
// Разметка элемента галереи
// Ссылка на оригинальное изображение должна храниться в data-атрибуте source на элементе img, и указываться в href ссылки (это необходимо для доступности).



// import images from './gallery-items.js'
// console.log(images);

// const image = {
//     jsLightbox: document.querySelector('.js-lightbox'),
//     lightboxOverlay: document.querySelector('.lightbox__overlay'),
//     lightboxButton: document.querySelector('.lightbox__button')
// }
// console.log(image);

// let galleryItem = document.querySelector('.gallery__item')
// //console.log(galleryItem);

// for (let index = 0; index < images.length; index++) {
//     const element = images[index];
//     // console.log(element.original);
//     let newImage = document.createElement('img')
//     newImage.src = element.preview
//     galleryItem.append(newImage)
//     newImage.addEventListener('click', (event) => {
//         console.log(event.target.nodeName);
//         if(event.target.nodeName === 'IMG'){
//             largeImage.src = element.original
//             //console.log(element.original);
//         }
//     })
// }
// let largeImage = document.createElement('img')
// galleryItem.after(largeImage)
// console.log(largeImage);






  

  
  
  
  
  












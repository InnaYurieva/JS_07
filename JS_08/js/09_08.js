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



import galleryItems from './gallery-items.js'
//console.log(galleryItems);


const galleryContainer = document.querySelector('.js-gallery');
const lightbox = document.querySelector('.js-lightbox');
const lightboxImg = document.querySelector('.lightbox__image');
const overlay = document.querySelector('.lightbox__overlay');
const closeBtn = document.querySelector('.lightbox__button');

  const imgMarkup = createGalleryImgMarkup(galleryItems);
  //console.log(imgMarkup);
  galleryContainer.insertAdjacentHTML('beforeend', imgMarkup);

  function createGalleryImgMarkup(items){
    //console.log(items);
    items.forEach(element => {
      let li = document.createElement('li');
      li.style.listStyleType = 'none'
      li.classList.add('gallery__item')
      galleryContainer.append(li)
      // let a = document.createElement('a');
      // a.classList.add('gallery__link')
      // a.href = element.original
      // li.append(a)
      let img = document.createElement('img');
      img.classList.add('gallery__image')
      img.src = element.preview
      //img.dataSource = element.original
      img.setAttribute('data-source', element.original);
      //console.log(element.original);
      //console.log(img);
      img.alt = element.description
      li.append(img)
      li.addEventListener('click', openModal);
      
    });
  }

  function openModal(event) {
    //console.log(event.target);
    //event.preventDefault();
  // if (event.target.nodeName !== 'IMG') {
  //   return;
  // };
    lightbox.classList.add('is-open');
    // const src = event.target.getAttribute('src')
    // const alt = event.target.getAttribute('alt')
    // //const bigImg = event.target.getAttribute('data-source')
    // if(src){
    //   lightboxImg.setAttribute('src', src);
    //   lightboxImg.setAttribute('alt', alt);
    //   //lightboxImg.setAttribute('data-source', bigImg);
    // }

    const bigImgRef = event.target.getAttribute('data-source');
    const alt = event.target.getAttribute('alt');
    lightboxImg.setAttribute('src', bigImgRef);
    lightboxImg.setAttribute('alt', alt);

  // galleryItems.forEach(item => {
  //   if (event.target.getAttribute('src') === item.preview) {
  //     lightboxImg.setAttribute('src', item.original);
  //     lightboxImg.setAttribute('alt', item.description);
  //   }
  // })
}


document.addEventListener('keydown', closeModal); 
overlay.addEventListener('click', closeModal);
closeBtn.addEventListener('click', closeModal);

function closeModal(event) {

  // console.log(event.target);
  if (event.key === 'Escape' || event.target.classList.contains('lightbox__overlay')|| event.target.classList.contains('lightbox__button')){
    lightbox.classList.remove('is-open');
}
}

// function onClickButtonClose(event) {
//   if (event.target.dataset.action === "close-lightbox") {
//     closeModal();
//   }
// }


let indexImage = 0; // задаем начальное значение индекса в глобальной переменной
function linkImages(event) {
  if (event.code === "ArrowRight") {
    indexImage += 1;
    if (indexImage >= galleryItems.length) {
      indexImage = 0;
    }
    lightboxImg.src = galleryItems[indexImage].original;
  } else if (event.code === "ArrowLeft") {
    indexImage -= 1;
    if (indexImage < 0) {
      indexImage = galleryItems.length - 1;
    }
    lightboxImg.src = galleryItems[indexImage].original;
  }
  console.log(galleryItems[indexImage]);
}

window.addEventListener("keydown", linkImages)







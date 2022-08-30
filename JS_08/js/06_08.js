// Задание 6
// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

let inputRef = document.querySelector('input')
//console.log(inputRef.getAttribute('data-length'));

inputRef.addEventListener('change', inputChange)
function inputChange (event){
    console.log(event.target.value.length);
    if (event.target.value.length < inputRef.getAttribute('data-length')) {
        inputRef.classList.add('valid')
        //inputRef.style.borderColor = 'green'
    } else inputRef.classList.add('invalid')
    //inputRef.style.borderColor = 'red'
}
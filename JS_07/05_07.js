// Задание 5
// Получить пользоваля (не массив) по email (поле email, он уникальный).

import users from "./obj.js";

const getUserWithEmail = (users, email) => {
    for (let i = 0; i < users.length; i++) {
        const element = users[i];
        if(element.email === email){
            return element
        }
    } 
};

console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}
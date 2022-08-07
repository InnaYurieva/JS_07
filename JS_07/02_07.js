// Задание 2
// Получить массив объектов пользователей по цвету глаз (поле eyeColor).

import users from "./obj.js";

const getUsersWithEyeColor = (users, color) => {
    let result = []
    for (let i = 0; i < users.length; i++) {
        const element = users[i];
        if(element.eyeColor === 'blue'){
            result.push(element)
        }
    }
    return result
};

console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]
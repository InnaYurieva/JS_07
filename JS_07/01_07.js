// Задание 1
// Получить массив имен всех пользователей (поле name).

import users from "./obj.js";

const getUserNames = users => {
    let result = []
    for (let i = 0; i < users.length; i++) {
        const element = users[i];
        result.push(element.name)
    }
    return result
};

console.log(getUserNames(users));
//[ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]
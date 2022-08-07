// Задание 3
// Получить массив имен пользователей по полу (поле gender).

import users from "./obj.js";

const getUsersWithGender = (users, gender) => {
    let result = []
    for (let i = 0; i < users.length; i++) {
        const element = users[i];
        if(element.gender === 'male'){
            result.push(element.name)
        }
    }
    return result
};

console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
// Задание 4
// Получить массив только неактивных пользователей (поле isActive).

import users from "./obj.js";

const getInactiveUsers = users => {
    let result = []
    for (let i = 0; i < users.length; i++) {
        const element = users[i];
        if(element.isActive === false){
            result.push(element)
        }
    }
    return result
};

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]
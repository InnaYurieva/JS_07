// Задание 8
// Массив имен всех пользователей у которых есть друг с указанным именем.
import users from "./obj.js";

const getUsersWithFriend = (users, friendName) => {
    let result = []
    for (let i = 0; i < users.length; i++) {
        const element = users[i];
        if(element.friends.includes(friendName)){
            result.push(element.name)
        }
    } return result
};

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]
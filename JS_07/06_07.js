// Задание 6
// Получить массив пользователей попадающих в возрастную категорию от min до max лет (поле age).
import users from "./obj.js";

const getUsersWithAge = (users, min, max) => {
  let result = []
    for (let index = 0; index < users.length; index++) {
      const element = users[index];
      if(element.age > min && element.age < max){
        result.push(element)
      }
      
    } return result
};

console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]
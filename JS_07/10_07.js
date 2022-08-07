// Задание 10
// Получить массив всех умений всех пользователей (поле skills), при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.
import users from "./obj.js";

// let a = ['adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'culpa', 'elit', 'ex', 'ipsum', 'ipsum', 'ipsum', 'irure', 'laborum', 'lorem', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam', 'veniam']
// let b = new Set(a)
// console.log([...b]);

const getSortedUniqueSkills = users => {
    let result = []
    for (let i = 0; i < users.length; i++) {
        const element = users[i];
        for (let i = 0; i < element.skills.length; i++) {
            const skill = element.skills[i];
            result.push(skill)
            result.sort()
            let a = new Set(result)
            result = [...a]
        }
    } return result
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
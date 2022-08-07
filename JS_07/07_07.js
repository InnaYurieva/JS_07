// Задание 7
// Получить общую сумму баланса (поле balance) всех пользователей.
import users from "./obj.js";

const calculateTotalBalance = users => {
    let total = 0
    for (let i = 0; i < users.length; i++) {
        const element = users[i];
        total += element.balance
    } return total
};

console.log(calculateTotalBalance(users)); // 20916


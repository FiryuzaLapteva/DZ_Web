'use strict';
/* Задача 2: Получить от пользователя два числа и вывести в диалоговое окно сумму значений, которые ввел пользователь, вывод должен выглядеть так (пример): 
Результат сложения чисел 5 и 2 равен 7. */

/* const numA = Number.parseFloat(prompt("Число 1 ")); 
const numB = Number.parseFloat(prompt("Число 2 "));
alert (numA + numB);
// const - переменная всегда будет лежать в этой переменой
function sum(){
    return numA + numB; 
}
sum();
alert(`Результат: ${sum()}`); */


/* 
Задача 3: Написать функцию, которая принимает имя пользователя при 
ее вызове и выводит сообщение с приветствием пользователя по имени в консоль. 
Проверить работоспособность функции. */

/* const nameHi = prompt("Введите ваше имя ");
nam(nameHi);

function nam(){
console.log (`Привет ${nameHi}`)
} */

/* Задача 4: вывести на экран в диалоговом окне текст с сообщением “Вам хорошо живется?”
и кнопками «ОК», «Отмена», для чего необходимо использовать confirm.
- При нажатии на кнопку “ОК” вывести в диалоговом окне текст с сообщением “Тогда мы идем к вам!”.
- При нажатии на кнопку “Отмена” вывести в диалоговом окне текст с сообщением 
“Ну вы держитесь там!”. */

/* const bool = confirm("Вам хорошо живется?");
if (bool) {
    alert("Тогда мы идем к вам");
}else{
    alert("Ну вы там держитесь");
} */

/* Задача 5: перепишите код, используя конструкцию switch-case,
 запрашивая возраст пользователя через диалоговое окно. */
const age = parseInt(prompt("Введите возраст"))
switch (age){
    case 18:
        alert('Вы совершеннолетний, все можно!');
        break;
    case 10:
        alert('Вам надо учить уроки!');
        break;
    case 30:
        alert('Ложитесь спать, завтра на работу');
        break;
    default:
        alert('Мы не знаем что Вам делать');
}
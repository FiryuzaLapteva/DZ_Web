'use strict';

const celsius = Number.parseFloat(prompt("Введите температуру в градусах Цельсия "));

function fahrenheit(c){
    return Math.round(1.8 * c + 32)
}

alert(`Температура в градусах по Фаренгейту: ${fahrenheit(celsius)}`);
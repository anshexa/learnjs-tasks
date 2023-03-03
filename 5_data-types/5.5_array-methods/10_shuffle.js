"use strict";

function shuffle(array) { // [7, 8, 9];
    // алгоритм тасования Фишера — Йетса

    let cuttentInd = array.length;
    let randInd;

    // Пока не дойдет до начала массива
    while (cuttentInd) {

        // случайный индекс от 0 до текущего индекса
        randInd = Math.floor(Math.random() * cuttentInd--);

        // взять элемент со случайным индексом
        // и поменять его местами с текущим элементом
        [array[cuttentInd], array[randInd]] = [array[randInd], array[cuttentInd]];
    }

    return array;
}

let arr = [1, 2, 3];

console.log(shuffle(arr));
console.log(shuffle(arr));
console.log(shuffle(arr));

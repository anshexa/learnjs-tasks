"use strict";

function Rabbit() {
}

Rabbit.prototype = {
    eats: true
};

let rabbit = new Rabbit();

// 1
// Rabbit.prototype = {};
// console.log(rabbit.eats); // true, т.к. объект прототипа устанавливается в момент вызова new

// 2
// Rabbit.prototype.eats = false;
// console.log(rabbit.eats); // false, т.к. св-во берется из прототипа

// 3
// delete rabbit.eats;
// console.log(rabbit.eats);   // true, т.к. это св-во в прототипе, а не в новом объекте

// 4
delete Rabbit.prototype.eats;
console.log(rabbit.eats);   // undefined, т.к. св-во читалось из прототипа

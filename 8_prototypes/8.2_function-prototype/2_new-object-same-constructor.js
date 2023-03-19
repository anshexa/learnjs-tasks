"use strict";

// вызов1 правильно сработает если задать так:
function Rabbit1() {
    this.name = 'Роджер';
}
Rabbit1.prototype.jumps = 'Да';

// или так:

// function Rabbit1() {
//     this.name = 'Роджер';
// }
Rabbit1.prototype = {
    jumps: 'Да',
    constructor: Rabbit1
};

let obj11 = new Rabbit1();
let obj12 = new obj11.constructor();   // вызов1
console.log(obj12.name);
console.log(obj12.jumps);
console.log(obj12.constructor === Rabbit1);   // true


// вызов2 не сработает если задать так:
function Rabbit2() {
    this.name = 'Роджер';
}
Rabbit2.prototype = {
    jumps: 'Да',
};

let obj21 = new Rabbit2();
let obj22 = new obj21.constructor();   // вызов2
console.log(obj22.name);    // undefined
console.log(obj22.jumps);   // undefined
console.log(obj22.constructor === Rabbit2);   // false

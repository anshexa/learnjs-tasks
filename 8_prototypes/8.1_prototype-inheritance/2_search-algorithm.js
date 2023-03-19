"use strict";

let head = {
    glasses: 1
};

let table = {
    pen: 3
};

let bed = {
    sheet: 1,
    pillow: 2
};

let pockets = {
    money: 2000,
};

pockets.__proto__ = bed;
bed.__proto__ = table;
table.__proto__ = head;

console.log(pockets.pen);
console.log(bed.glasses);

let test1;
let test2;

let start;
let finish;

start = Date.now();
test1 = pockets.glasses;
finish = Date.now();
console.log(finish - start);    // 0

start = Date.now();
test2 = head.glasses;
finish = Date.now();
console.log(finish - start);    // 0 - одинаково быстро получает значение glasses

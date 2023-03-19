"use strict";

function makeCounter1() {
    // для хранения count используем свойство функции

    function counter() {
        // св-во set
        counter.set = function (value) {
            counter.count = value;
        }
        // св-во decrease
        counter.decrease = function () {
            counter.count--;
        }
        return counter.count++;
    }

    counter.count = 0;
    return counter;
}

function makeCounter2() {
    // для хранения count используем замыкание

    let count = 0;

    function counter() {
        // св-во set
        counter.set = function (value) {
            count = value;
        }
        // св-во decrease
        counter.decrease = function () {
            count--;
        }
        return count++;
    }

    return counter;
}


let counter1 = makeCounter1();

console.log(counter1()); // 0
console.log(counter1()); // 1

counter1.set(10); // установить новое значение счётчика
console.log(counter1()); // 10

counter1.decrease(); // уменьшить значение счётчика на 1
console.log(counter1()); // 10 (вместо 11)


let counter2= makeCounter2();

console.log(counter2()); // 0
console.log(counter2()); // 1

counter2.set(10); // установить новое значение счётчика
console.log(counter2()); // 10

counter2.decrease(); // уменьшить значение счётчика на 1
console.log(counter2()); // 10 (вместо 11)

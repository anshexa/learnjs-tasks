"use strict";

function Rabbit(name) {
    this.name = name;
}

Rabbit.prototype.sayHi = function () {
    console.log(this.name);
};

let rabbit = new Rabbit("Rabbit");

rabbit.sayHi();     // вызывает метод sayHi в прототипе Rabbit с this rabbit,
                    // выводит Rabbit

Rabbit.prototype.sayHi();   // вызывает метод sayHi с this Rabbit.prototype,
                            // выводит undefined

Object.getPrototypeOf(rabbit).sayHi();  // вызывает метод sayHi с this Rabbit.prototype
                                        // выводит undefined

rabbit.__proto__.sayHi();   // вызывает метод sayHi с this Rabbit.prototype
                            // выводит undefined

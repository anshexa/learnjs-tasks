"use strict";

class Rabbit extends Object {
    constructor(name) {
        super(name);    // нужно вызвать родительский конструктор
        this.name = name;
    }
}
let rabbit = new Rabbit("Rab");


console.log(rabbit.hasOwnProperty('name'));

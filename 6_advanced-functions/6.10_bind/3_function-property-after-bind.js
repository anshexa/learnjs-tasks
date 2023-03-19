"use strict";

function sayHi() {
    console.log(this.name);
}

sayHi.test = 5;

let bound = sayHi.bind({
    name: "Вася"
});

console.log(bound.test); // выведет undefined, свойство test не скопировалось в новый объект bound

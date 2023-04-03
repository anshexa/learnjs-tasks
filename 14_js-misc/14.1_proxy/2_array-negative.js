"use strict";

let array = [1, 2, 3];

array = new Proxy(array, {
    get(target, prop, receiver) {
        if (prop < 0) {
            prop = Number(target.length) + Number(prop)
        }
        let value = Reflect.get(target, prop, receiver)
        return value
    }
});

console.log(array[-1]); // 3
console.log(array[-2]); // 2


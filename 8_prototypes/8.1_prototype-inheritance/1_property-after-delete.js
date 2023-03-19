"use strict";

let animal = {
    jumps: null
};
let rabbit = {
    __proto__: animal,
    jumps: true
};

console.log('(1)', rabbit.jumps); // true

delete rabbit.jumps;

console.log('(2)', rabbit.jumps); // null

delete animal.jumps;

console.log('(3)', rabbit.jumps); // undefined

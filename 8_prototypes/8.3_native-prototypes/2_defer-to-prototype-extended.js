"use strict";

Function.prototype.defer = function (ms) {

    function wrapper(...args) {
        setTimeout(() => f.call(this, ...args), ms);
    }

    return wrapper.bind(this);
}

function f(a, b) {
    console.log(a + b);
}

f.defer(1000)(1, 2); // выведет 3 через 1 секунду.

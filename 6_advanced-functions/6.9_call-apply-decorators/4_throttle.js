"use strict";

function throttle(f, ms) {
    let isCall = true;

    function wrapper(...args) {
        wrapper.lastCall = '';
        let lastThis = '';
        if (!isCall) {
            wrapper.lastCall = args;
            lastThis = this;
            return;
        }

        f.call(this, ...args);
        isCall = false;
        setTimeout(function () {
            isCall = true;
            if (wrapper.lastCall.length > 0) {
                wrapper.call(lastThis, wrapper.lastCall[0]);
            }
        }, ms);
    }

    return wrapper;
}


function f(a) {
    console.log(a)
}

// f1000 передаёт вызовы f максимум раз в 1000 мс
let f1000 = throttle(f, 1000);

f1000(1); // показывает 1
f1000(2); // (ограничение, 1000 мс ещё нет)
f1000(3); // (ограничение, 1000 мс ещё нет)

// когда 1000 мс истекли ...
// ...выводим 3, промежуточное значение 2 было проигнорировано

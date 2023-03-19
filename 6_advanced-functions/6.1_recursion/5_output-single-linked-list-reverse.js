"use strict";

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};


function printListReverse1(list) {
    // через цикл
    let arr = [];

    while (list) {
        arr.push(list.value);
        list = list['next'];
    }
    arr.reverse();

    for (let arrElement of arr) {
        console.log(arrElement);
    }
}


function printListReverse2(list) {
    // через рекурсию
    if (list === null) {
        return;
    }
    else {
        printListReverse2(list['next']);
        console.log(list['value']);
    }
}


printListReverse1(list);
printListReverse2(list);

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


function printList1(list) {
    // через цикл
    console.log(list['value']);
    while (list['next'] !== null) {
        list = list['next'];
        console.log(list['value']);
    }
}


function printList2(list) {
    // через рекурсию
    console.log(list['value']);
    if (list['next'] !== null) {
        printList2(list['next']);
    }
}


printList1(list);
printList2(list);

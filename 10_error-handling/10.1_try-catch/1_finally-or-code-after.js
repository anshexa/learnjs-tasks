"use strict";

// код работает по-разному
// в первой функции "очистка" выполнится в любом случае
// во второй функции "очистка" не выполнится в случаях,
// если нет ошибок, т.к. будет выход из ф-ции в return,
// и если есть ошибка2, т.к. код остановится на throw

function f1(myError = '') {
    try {
        console.log('начать работу f1');
        if (myError === 'Error1') {
            console.log('есть ошибка1 f1');
            lalala; // ошибка, переменная не определена!
        }
        if (myError === 'Error2') {
            console.log('есть ошибка2 f1');
            mimimi; // ошибка, переменная не определена!
        }
        console.log('нет ошибки f1');
        console.log('работать f1');
        return
    } catch (e) {
        if (e.message == 'lalala is not defined') {
            console.log('обработать ошибку1 f1');
        }
        if (e.message == 'mimimi is not defined') {
            console.log('обработать ошибку2 f1');
            throw e;
        }
    } finally {
        // выполнится в любом случае
        console.log('очистить рабочее пространство f1');
    }
}


function f2(myError = '') {
    try {
        console.log('начать работу f2');
        if (myError === 'Error1') {
            console.log('есть ошибка1 f2');
            lalala; // ошибка, переменная не определена!
        }
        if (myError === 'Error2') {
            console.log('есть ошибка2 f2');
            mimimi; // ошибка, переменная не определена!
        }
        console.log('нет ошибки f2');
        console.log('работать f2');
        return
    } catch (e) {
        if (e.message == 'lalala is not defined') {
            console.log('обработать ошибку1 f2');
        }
        if (e.message == 'mimimi is not defined') {
            console.log('обработать ошибку2 f2');
            throw e;
        }
    }
    // в случае, если нет ошибок, не выполнится, т.к. будет выход из ф-ции в return
    // в случае, если есть ошибка2, не выполнится, т.к. код остановится на throw
    console.log('очистить рабочее пространство f2');
}


f1();
console.log('-----------------------')
f2();

// f1('Error1');
// console.log('-----------------------')
// f2('Error1');

// f1('Error2');
// f2('Error2');

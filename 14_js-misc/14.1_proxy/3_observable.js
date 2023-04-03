"use strict";

let handlers = Symbol('handlers');

function makeObservable(target) {
    // 1. Создадим хранилище обработчиков
    target[handlers] = [];

    // положим туда функции-обработчики для вызовов в будущем
    target.observe = function (handler) {
        this[handlers].push(handler);
    };

    // 2. Создадим прокси для реакции на изменения
    return new Proxy(target, {
        set(target, property, value, receiver) {
            // перенаправим операцию к оригинальному объекту
            let success = Reflect.set(...arguments);
            if (success) { // если не произошло ошибки при записи свойства
                // вызовем обработчики
                target[handlers].forEach(handler => handler(property, value));
            }
            return success;
        }
    });
}

let user = {};
user = makeObservable(user);

user.observe((key, value) => {
        console.log(`SET ${key}=${value}`);
    }
);

user.name = "John"; // выводит: SET name=John

"use strict";

let phrase = "Hello";

if (true) {
    let user = "John";

    function sayHi() {
        alert(`${phrase}, ${user}`);
    }
}

sayHi();    // ошибка, т.к. sayHi() видно только в if

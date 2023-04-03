"use strict";

class FormatError extends SyntaxError {
    constructor(message) {
        super(message);
        this.name = this.constructor.name
    }

    // message, name и stack
}

let err = new FormatError("ошибка форматирования");

console.log(err.message); // ошибка форматирования
console.log(err.name); // FormatError
console.log(err.stack); // stack

console.log(err instanceof FormatError); // true
console.log(err instanceof SyntaxError); // true (потому что наследует от SyntaxError)

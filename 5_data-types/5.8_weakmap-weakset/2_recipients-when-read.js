"use strict";

let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];

let readDate = new WeakMap();

readDate.set(messages[2],'27.02.2023');
console.log(`Сообщение 3 прочитано ${readDate.get(messages[2])}`);  // 27.02.2023

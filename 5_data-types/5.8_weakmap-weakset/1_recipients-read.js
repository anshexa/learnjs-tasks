"use strict";

let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];

let readMessages = new WeakSet();

readMessages.add(messages[2]);
console.log(`Прочитано сообщение 3: ${readMessages.has(messages[2])}`)  // true

messages.splice(2, 1);

console.log(`Прочитано сообщение 3: ${readMessages.has(messages[2])}`)  // false

messages.push({text: "Hi", from: "Tom"});
console.log(`Прочитано сообщение 3: ${readMessages.has(messages[2])}`)  // false

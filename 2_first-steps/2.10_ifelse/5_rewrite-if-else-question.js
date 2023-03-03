"use strict";   // работа кода в «современном» режиме

let login;
login = 'Сотрудник';
// login = 'Директор';
// login = '';
// login = 0;
let message;
message = (login === 'Сотрудник') ? 'Привет' :
        (login === 'Директор') ? 'Здравствуйте' :
        (login === '') ? 'Нет логина' :
            '';
console.log(message);

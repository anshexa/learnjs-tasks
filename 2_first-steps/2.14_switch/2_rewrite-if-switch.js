"use strict";   // работа кода в «современном» режиме

// подставить число между 0 и 3
const number = 3;
switch (Number(number)) {
    case 0:
        console.log('Вы ввели число 0');
        break;
    case 1:
        console.log('Вы ввели число 1');
        break;
    case 2:
    case 3:
        console.log('Вы ввели число 2, а может и 3');
        break;
}

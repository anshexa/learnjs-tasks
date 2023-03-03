"use strict";   // работа кода в «современном» режиме

if (-1 || 0) console.log('first');  // выполнится
if (-1 && 0) console.log('second'); // не выполнится
if (null || -1 && 1) console.log('third');  // выполнится
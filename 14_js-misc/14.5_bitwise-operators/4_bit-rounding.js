"use strict";

console.log(123456789 ^ 0); // 123456789

let n = 12345678912345;
console.log(n.toString(2).length);  // 44
console.log(12345678912345 ^ 0); // 1942903641 - теряются биты с 44-го до 32-го, поэтому результат отличается

"use strict";

console.log(123 ^ 0); // 123
let n1 = 123;
let n2 = 0;
console.log(n1.toString(2))     // 1111011
console.log(n2.toString(2))     // 0000000
                                      // 1111011 - то же число при исключающем ИЛИ
console.log(0 ^ 123); // 123 - аналогично предыдущему
console.log(~~123); // 123 - двойное отрицание будет равно тому же числу


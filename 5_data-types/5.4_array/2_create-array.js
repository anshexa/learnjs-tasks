"use strict";

let styles = ['Джаз', 'Блюз'];
styles.push('Рок-н-ролл');
let middle = Math.ceil(styles.length / 2);
styles[middle - 1] = 'Классика';
console.log(styles.shift());
styles.unshift('Рэп ','Регги ');

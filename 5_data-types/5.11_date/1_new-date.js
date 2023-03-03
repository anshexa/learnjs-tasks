"use strict";

// 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная
let date = new Date('2012-02-20T03:12');
console.log(date.toString());

date=new Date(2012,1,20,3,12);
console.log(date.toString());

date = new Date(Date.parse('2012-02-20T03:12'));
console.log(date.toString());

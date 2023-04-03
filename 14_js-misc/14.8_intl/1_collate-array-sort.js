"use strict";

let animals = ["тигр", "ёж", "енот", "ехидна", "АИСТ", "ЯК"];
let colorator = new Intl.Collator();
animals.sort((a, b) => colorator.compare(a, b));
console.log(animals); // АИСТ,ёж,енот,ехидна,тигр,ЯК

let i = 0;

setTimeout(() => console.log(i), 100); // выполнится после цикла, выведет 100000000

// предположим, что время выполнения этой функции >100 мс
for(let j = 0; j < 100000000; j++) {
    i++;
}

"use strict";

new Promise(function (resolve, reject) {
    setTimeout(() => {
        throw new Error("Whoops!");
    }, 1000);
})
    .catch(console.log);  // не выполнится, т.к. исключение, запланированное
                          // «на будущее», не обработается скрытым try..catch

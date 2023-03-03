// для тестирования раскомментировать нужный ответ
let answerToQuestion = 'OK';
// let answerToQuestion = 'Отмена';

let confirmQuestion;

if (answerToQuestion == 'OK') {
    confirmQuestion = true;
}
if (answerToQuestion == 'Отмена') {
    confirmQuestion = false;
}

ask(
    confirmQuestion,
    () => console.log("Вы согласились."),
    () => console.log("Вы отменили выполнение.")
);

function ask(confirmQuestion, yes, no) {
    if (confirmQuestion) yes();
    else no();
}

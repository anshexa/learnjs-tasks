"use strict";   // работа кода в «современном» режиме

describe('pow', function () {

    it('Возводит x в степень n', function () {
        // с этим тестом не так то, что
        // он выполняет несколько действий,
        // степени заданы вручную,
        // код повторяется
        let x = 5;

        let result = x;
        assert.equal(pow(x, 1), result);

        result *= x;
        assert.equal(pow(x, 2), result);

        result *= x;
        assert.equal(pow(x, 3), result);
    });
    // Вариант, как можно переделать тест
    //--- начало
    describe('Возводит x в степень n', function () {
        function makeTest(x, n) {
            let result = x ** n;
            it(`${x} в степени ${n} будет ${result}`, function () {
                assert.equal(pow(x, n), result);
            });
        }

        let x = 5;
        let maxDeg = 3;
        for (let n = 1; n <= maxDeg; n++) {
            makeTest(x, n);
        }
    })
    //--- конец


    describe('возводит x в степень 3', function () {
        function makeTest(x) {
            let expected = x * x * x;
            it(`${x} в степени 3 будет ${expected}`, function () {
                assert.equal(pow(x, 3), expected);
            });
        }

        for (let x = 1; x <= 5; x++) {
            makeTest(x);
        }
    });

    it("для отрицательных n возвращает NaN", function () {
        assert.isNaN(pow(2, -1));
    });

    it("для дробных n возвращает NaN", function () {
        assert.isNaN(pow(2, 1.5));
    });
});
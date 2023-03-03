"use strict";

function getMaxSubSum(arr) {
    // алгоритм Кадане

    let maxElem;
    maxElem = Math.max.apply(null, arr);
    if (maxElem < 0) {
        return 0;
    }

    let maxSum = 0;
    // максимальная сумма в текущем отрезке
    let currentMaxSum = 0;
    for (let num of arr) {
        currentMaxSum += num;
        // если меньше нуля - то ноль
        currentMaxSum = Math.max(currentMaxSum, 0);
        maxSum = Math.max(maxSum, currentMaxSum);
    }
    return maxSum;
}


let arr = [1, -2, 3, 4, -9, 6];
console.log(getMaxSubSum(arr));

console.log(getMaxSubSum([-1, 2, 3, -9]));        // 5 (сумма 2,3)
console.log(getMaxSubSum([2, -1, 2, 3, -9]));     // 6 (сумма 2,-1,2,3)
console.log(getMaxSubSum([-1, 2, 3, -9, 11]));    // 11 (сумма 11)
console.log(getMaxSubSum([-2, -1, 1, 2]));        // 3 (сумма 1,2)
console.log(getMaxSubSum([100, -9, 2, -3, 5]));   // 100 (сумма 100)
console.log(getMaxSubSum([1, 2, 3]));             // 6 (берём все)
console.log(getMaxSubSum([-1, -2, -3]));    // 0

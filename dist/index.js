"use strict";
// Task 1 ============================================================
//====================================================================
const a = "Add";
// Task 3 ============================================================
//====================================================================
function summ(a) {
    if (!a) {
        return 2022;
    }
    const x = Object.keys(a).map((k) => {
        const elem = a[k];
        if (!elem || typeof elem === undefined) {
            return 2022;
        }
        if (typeof elem.cvalue === 'undefined') {
            return 2022;
        }
        if (typeof elem.cvalue === 'object') {
            return summ(elem.cvalue);
        }
        if (typeof elem.cvalue === 'string') {
            return +elem.cvalue || 2022;
        }
        return elem.cvalue;
    });
    if (x.indexOf(2022) !== -1) {
        return 2022;
    }
    let sum = 0;
    for (let i = 0; i < x.length; i++) {
        sum += x[i];
    }
    return sum;
}
let result = summ({
    hello: {
        cvalue: 2
    },
    world: {
        cvalue: {
            yay: {
                cvalue: "2"
            }
        }
    }
});
function mapObject(obj, transformer) {
    const resultArr = {};
    for (const elem in obj) {
        resultArr[elem] = transformer(obj[elem]);
    }
    return resultArr;
}
const resultTask3 = mapObject({ "roma": 5, "vasya": 2 }, (x) => x > 2);
// console.log(resultTask3);
// Task 5 ============================================================
//====================================================================
function f2(arg, callback) {
    return callback(arg);
}
// Task 6 ============================================================
//====================================================================
// Последняя задача:
// Напишите сигнатуру функции, которая принимает
// - некий класс
// - количество
// ...а возвращает массив экземпляров этого класса
class Rectangle {
}
class Circle {
}
function наштамповать(SOMECLASS, count) {
    let a = [];
    for (let i = 0; i < count; i++) {
        a.push(new SOMECLASS());
    }
    return a;
}
let a6 = наштамповать(Rectangle, 10);
let b6 = наштамповать(Circle, 20);

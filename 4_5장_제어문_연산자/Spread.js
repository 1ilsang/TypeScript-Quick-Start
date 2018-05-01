"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
// 배열 합치기
var arr = [1, 2];
var arr2 = arr.concat([3, 4]);
console.log("1번 : ", arr2);
// 배열 디스트럭처링
var _a = [10, 20, 30], firstItem = _a[0], rest = _a.slice(1);
console.log("2번 : ", firstItem);
console.log("3번 : ", rest);
console.log("4번 : ", rest[0]);
var _b = { a: 10, b: 20, c: 30, d: 40 }, a = _b.a, b = _b.b, c = __rest(_b, ["a", "b"]);
console.log(a);
console.log(b);
console.log(c);

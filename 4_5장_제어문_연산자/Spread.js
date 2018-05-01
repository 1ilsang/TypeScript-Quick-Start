"use strict";
// 배열 합치기
var arr = [1, 2];
var arr2 = arr.concat([3, 4]);
console.log("1번 : ", arr2);
// 배열 디스트럭처링
var _a = [10, 20, 30], firstItem = _a[0], rest = _a.slice(1);
console.log("2번 : ", firstItem);
console.log("3번 : ", rest);
console.log("4번 : ", rest[0]);

"use strict";
var myNum = "2017";
// 타입 캐스팅
var num1 = +myNum;
var num2 = Number(myNum);
var num3 = parseInt(myNum);
console.log("num1=" + num1 + ", " + typeof num1);
console.log("num2=" + num2 + ", " + typeof num2);
console.log("num3=" + num3 + ", " + typeof num3);
// 타입 호환
var num4 = myNum;
var num5 = myNum;
console.log("num4=" + num4 + ", " + typeof num4);
console.log("num5=" + num5 + ", " + typeof num5);

"use strict";
var neverTouch = function () {
    while (true) {
        console.log("Never");
    }
    console.log(); // 닿을 수 없는 코드!
};
var resultNever = neverTouch();
///////////////////////
function nevertest(value) {
    if (typeof value === "string") {
        return value;
    }
    else if (typeof value === "number") {
        return value;
    }
    else {
        return value; // 닿을 수 없는 코드
    }
}
console.log(nevertest("test"));
///////////////////////
function error(message) {
    throw new Error(message);
}
function fail() {
    return error("error!!!");
}
fail();
///////////////////////

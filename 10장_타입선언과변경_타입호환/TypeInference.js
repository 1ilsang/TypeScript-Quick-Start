"use strict";
var values = [0, "c", null];
console.log(typeof values);
console.log(typeof values[0]);
console.log(typeof values[1]);
console.log(typeof values[2]);
values[0] = values[1];
console.log(typeof values[0]);

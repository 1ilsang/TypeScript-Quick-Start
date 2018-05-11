"use strict";
var Animal = /** @class */ (function () {
    function Animal(name, weight) {
    }
    return Animal;
}());
var Bird = /** @class */ (function () {
    function Bird(speed) {
    }
    return Bird;
}());
var animal = new Animal("happy", 100);
var bird = new Bird(10);
animal = bird; // 타입 호환이 가능
// bird = animal; // 타입 호환이 가능

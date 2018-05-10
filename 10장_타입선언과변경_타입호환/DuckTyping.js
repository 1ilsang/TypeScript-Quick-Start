"use strict";
var Duck = /** @class */ (function () {
    function Duck() {
    }
    Duck.prototype.speak = function () {
        console.log("Quak!");
    };
    Duck.prototype.swim = function () {
        console.log("Duck swimming");
    };
    return Duck;
}());
var Goose = /** @class */ (function () {
    function Goose() {
    }
    Goose.prototype.speak = function () {
        console.log("squawk!");
    };
    Goose.prototype.swim = function () {
        console.log("Goose swimming");
    };
    return Goose;
}());
function swim(obj) {
    obj.speak();
    obj.swim();
}
var duck = new Duck();
var goose = new Goose();
swim(duck);
//타입 안전성 추가
// interface DuckGoose {
//     speak();
//
//     swim();
// }
//
// function swim(obj: DuckGoose) {
//     obj.speak();
//     obj.swim();
// }

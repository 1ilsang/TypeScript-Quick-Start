"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Flashlight 클래스
var Flashlight = /** @class */ (function () {
    function Flashlight(lightIntensity) {
        this.lightIntensity = lightIntensity;
    }
    return Flashlight;
}());
// Bicycle 클래스
var Bicycle = /** @class */ (function () {
    function Bicycle(numberOfWheel) {
        this.numberOfWheel = numberOfWheel;
    }
    Bicycle.prototype.getNumberOfWheel = function () {
        return this.numberOfWheel;
    };
    return Bicycle;
}());
// Bicycle 클래스를 상속함(IS-A 관계)
var MountainBike = /** @class */ (function (_super) {
    __extends(MountainBike, _super);
    function MountainBike(numberOfWheel, hasBackSaddle) {
        var _this = _super.call(this, numberOfWheel) || this;
        _this.numberOfWheel = numberOfWheel;
        _this.hasBackSaddle = hasBackSaddle;
        // 자전거가 후레쉬 라이트를 포함함(HAS-A 관계)
        _this.flashlight = new Flashlight(90);
        return _this;
    }
    MountainBike.prototype.getHasBackSaddle = function () {
        return this.hasBackSaddle;
    };
    MountainBike.prototype.getNumberOfWheel = function () {
        return this.numberOfWheel;
    };
    return MountainBike;
}(Bicycle));
var hasBackSaddle = true;
var numberOfWheel = 2;
var mountainBike = new MountainBike(numberOfWheel, hasBackSaddle);
console.log("자전거의 안장 유무 : " + mountainBike.getHasBackSaddle());
console.log("자전거의 바퀴 개수 : " + mountainBike.getNumberOfWheel());
//Type aliasing
var emotion = { name: "sad" };
function aliasing(pEmotion) {
    pEmotion.name = "happy";
}
console.log(emotion.name); // sad
// emotion.name = "happy"; // 에러
aliasing(emotion);
console.log(emotion.name); // happy

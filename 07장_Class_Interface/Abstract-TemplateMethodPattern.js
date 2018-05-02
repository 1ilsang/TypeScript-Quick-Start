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
var AbstractBird = /** @class */ (function () {
    function AbstractBird() {
    }
    // 구현 메서드
    AbstractBird.prototype.fly = function () {
        this.flySound("파닥파닥");
    };
    // 구현 메서드
    AbstractBird.prototype.getHabitat = function () {
        console.log("<" + this.birdName + ">\uC758 \uC11C\uC2DD\uC9C0\uB294 <" + this.habitat + "> \uC785\uB2C8\uB2E4.");
    };
    return AbstractBird;
}());
var WildGoose = /** @class */ (function (_super) {
    __extends(WildGoose, _super);
    // 추상 멤버 변수를 상속함
    function WildGoose(birdName, habitat) {
        var _this = _super.call(this) || this;
        _this.birdName = birdName;
        _this.habitat = habitat;
        return _this;
    }
    // 추상 메서드를 오버라이딩
    WildGoose.prototype.flySound = function (sound) {
        console.log("<" + this.birdName + ">\uAC00 <" + sound + "> \uB0A0\uC544\uAC11\uB2C8\uB2E4.");
    };
    return WildGoose;
}(AbstractBird));
var wildGoose = new WildGoose("기러기", "순천만 갈대밭");
wildGoose.fly();
wildGoose.getHabitat();
/*
모두 Public이다라는 점을 주의함
*/ 

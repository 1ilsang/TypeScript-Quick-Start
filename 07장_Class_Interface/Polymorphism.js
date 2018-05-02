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
var Planet = /** @class */ (function () {
    function Planet() {
        this.test = 5;
        this.isTransduction = true; // 공전
    }
    Planet.prototype.getIsTransduction = function () {
        return this.isTransduction;
    };
    Planet.prototype.stopTransduction = function () {
        console.log("stop1");
        this.isTransduction = false;
    };
    return Planet;
}());
var Earth = /** @class */ (function (_super) {
    __extends(Earth, _super);
    function Earth() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.features = ["soil", "water", "oxyzen"];
        return _this;
    }
    Earth.prototype.stopTransduction = function () {
        console.log("stop2");
        this.isTransduction = false;
    };
    return Earth;
}(Planet));
var earth = new Earth();
earth.diameter = 12656.2;
console.log("1번 : " + earth.diameter);
console.log("2번 : " + earth.getIsTransduction());
console.log("3번 : " + earth.test);
earth.stopTransduction();
console.log("3번 : " + earth.getIsTransduction());
// console.log(earth.features); // 접근 불가
/// 추상 클래스
var Train = /** @class */ (function () {
    function Train(speed) {
        this.speed = speed;
    }
    Train.prototype.speedUp = function () {
        this.speed++;
    };
    return Train;
}());
var Ktx = /** @class */ (function (_super) {
    __extends(Ktx, _super);
    function Ktx(speed) {
        var _this = _super.call(this, speed) || this;
        _this.speed = speed;
        return _this;
    }
    Ktx.prototype.getSpeed = function () {
        return this.speed;
    };
    Ktx.prototype.speedUpUp = function () {
        this.speed += 2;
    };
    return Ktx;
}(Train));
var ktx = new Ktx(300);
console.log("현재 속도 : " + ktx.getSpeed() + "km");
ktx.speedUp();
// ktx.speedUpUp();//ERR
console.log("현재 속도 : " + ktx.getSpeed() + "km");
var Led = /** @class */ (function () {
    function Led(name) {
        this.name = name;
    }
    Led.prototype.getName = function () {
        return "LED => " + this.name;
    };
    return Led;
}());
var Oled = /** @class */ (function () {
    function Oled(name) {
        this.name = name;
    }
    Oled.prototype.getName = function () {
        return "OLED => " + this.name;
    };
    return Oled;
}());
var MonitorDisplayTest = /** @class */ (function () {
    function MonitorDisplayTest() {
    }
    // 개선 전
    MonitorDisplayTest.prototype.display1 = function (monitor) {
        if (monitor instanceof Led) {
            // 변수에 지정된 타입과 타입 어설션은 생략 가능
            var myMonitor = monitor;
            return myMonitor.getName();
        }
        else if (monitor instanceof Oled) {
            var myMonitor = monitor;
            return myMonitor.getName();
        }
    };
    // 개선 후
    MonitorDisplayTest.prototype.display2 = function (monitor) {
        var myMonitor = monitor;
        return myMonitor.getName();
    };
    return MonitorDisplayTest;
}());
var displayTest = new MonitorDisplayTest();
console.log("\n1\uBC88 " + displayTest.display1(new Led("LED TV")) + "\n2\uBC88 " + displayTest.display1(new Oled("OLED TV")) + "\n3\uBC88 " + displayTest.display2(new Led("LED TV")) + "\n4\uBC88 " + displayTest.display2(new Oled("OLED TV")));

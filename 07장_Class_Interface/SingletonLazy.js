"use strict";
var LazeLogger = /** @class */ (function () {
    function LazeLogger() {
    }
    // #2 private을 붙여 객체로 생성되지 않도록 함
    LazeLogger.prototype.LazeLogger = function () { };
    // #3 게으른 초기화를 진행
    LazeLogger.getLogger = function () {
        // #3-1 생성된 객체가 없으면 초기화
        if (this.uniqueObject == null) {
            this.uniqueObject = new LazeLogger();
        }
        return this.uniqueObject;
    };
    // #4 정보 로그를 출력
    LazeLogger.prototype.info = function (message) {
        console.log("[info] " + message);
    };
    // #5 경고 로그를 출력
    LazeLogger.prototype.warnning = function (message) {
        console.log("[warn] " + message);
    };
    return LazeLogger;
}());
// #6 싱글턴 객체를 얻고 메서드(info, warning)를 사용함
var lazeLogger = LazeLogger.getLogger();
var lazeLogger2 = LazeLogger.getLogger();
lazeLogger.info("1번 : 정보 log");
lazeLogger.warnning("2번 : 경고 log");
lazeLogger.info("3\uBC88 : " + (lazeLogger === lazeLogger2));

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
var SingleTypeChecker = /** @class */ (function () {
    function SingleTypeChecker() {
    }
    SingleTypeChecker.prototype.typeCheck = function (value) {
        console.log(typeof value + " : " + value);
    };
    return SingleTypeChecker;
}());
var UnionTypeChecker = /** @class */ (function (_super) {
    __extends(UnionTypeChecker, _super);
    function UnionTypeChecker() {
        return _super.call(this) || this;
    }
    UnionTypeChecker.prototype.typeCheck = function (value) {
        if (typeof value === "number") {
            console.log("숫자 : ", value);
        }
        else if (typeof value === "string") {
            console.log("문자열 : ", value);
        }
        else {
            console.log("기타 : ", value);
        }
    };
    return UnionTypeChecker;
}(SingleTypeChecker));
var unionTypeChecker = new UnionTypeChecker();
unionTypeChecker.typeCheck(123);
unionTypeChecker.typeCheck("happy");
// unionTypeChecker.typeCheck(true); // 에러
/*
myName(value: number | string): void {
        console.log(value);
    }
*/ 

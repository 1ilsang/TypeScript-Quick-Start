"use strict";
var TestReadonly = /** @class */ (function () {
    function TestReadonly() {
        this.count4 = 0; // readonly로 선언되면 초기화 가능
    }
    TestReadonly.prototype.getCount = function () {
        // this.count4 = 0; // readonly로 선언된 멤버 변수는 재할당 불가
        // readonly count5: number = 0; // readonly는 메서드에 선언할 수 없음
    };
    return TestReadonly;
}());
function getCount() {
    // readonly count: number; // readonly는 함수에 선언할 수 없음
}
// readonly은 객체 리터럴의 속성 앞에 지정 가능
var literalObj = { alias: "happy" };
// literalObj.name = "happy"; // readonly로 지정된 타입으로 인해 할당 불가
// literalObj = "test"; // readonly로 지정된 타입으로 인해 할당 불가
// literalObj.alias = "happy"; // readonly로 지정된 타입으로 인해 재할당 불가

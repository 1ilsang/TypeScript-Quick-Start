"use strict";
var _a = { a: "a-hi", c: "c-hi" }, a = _a.a, _b = _a.b, b = _b === void 0 ? 88 : _b, d = _a.c;
console.log(a, b, d); // c 를 넣으면 에러
function printProfile(_a) {
    var _b = _a === void 0 ? { name: "anonymous" } : _a, name = _b.name, _c = _b.nationality, nationality = _c === void 0 ? "none" : _c;
    //선언과 할당의 차이를 생각해 보자.
    console.log(name, nationality);
}
printProfile();
printProfile({ name: "happy" }); // nationality는 디폴트 값인 ?가 정해졌으므로 생략 가능
printProfile({ name: "happy", nationality: "korea" });
printProfile({}); // name은 디폴트 값이 없으므로 생략 불가능
printProfile({ nationality: "korea" }); // name은 디폴트 값이 없으므로 생략 불가능
function fruit(_a) {
    var a = _a.a, b = _a.b;
    console.log(a, b);
}
fruit({ a: "apple", b: 10 });

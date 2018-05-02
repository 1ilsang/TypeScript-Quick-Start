"use strict";
var Student2 = /** @class */ (function () {
    function Student2() {
    }
    Object.defineProperty(Student2.prototype, "name", {
        get: function () {
            return this.studentName;
        },
        set: function (name) {
            // 포함되면 0, 포함되지 않으면 -1
            if (name.indexOf("happy") !== 0) {
                this.studentName = name;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Student2.prototype, "birthYear", {
        get: function () {
            return this.studentBirthYear;
        },
        set: function (year) {
            if (year <= 2000) {
                this.studentBirthYear = year;
            }
        },
        enumerable: true,
        configurable: true
    });
    return Student2;
}());
var student2 = new Student2();
student2.birthYear = 2001; // set
console.log("1번 : " + student2.birthYear); // get
student2.birthYear = 2000; // set
console.log("2번 : " + student2.birthYear); // get
student2.name = "happy"; // set
console.log("3번 : " + student2.name); // get
student2.name = "lucky"; // set
console.log("4번 : " + student2.name); // get

"use strict";
var input = 2;
switch (input % 2) {
    case 0:
        console.log("숫자 0"); // fall-throughs 발생
    case 1:
        console.log("숫자 1");
        break;
}
switch (input) {
    //폴루스 제약을 걸어도 허용함.
    case 0:
    case 1:
        console.log("숫자 1");
        break;
}
// {
//     "compilerOptions":{
//         "noFallthroughCasesInSwitch" : false
//     }
// }

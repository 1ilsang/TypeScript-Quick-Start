const neverTouch = function (): never {
    while (true) {
        console.log("Never");
    }
    console.log(); // 닿을 수 없는 코드!
};

let resultNever: never = neverTouch();
///////////////////////
function nevertest(value: string | number) {
    if (typeof value === "string") {
        return value;
    }
    else if (typeof value === "number") {
        return value;
    } else {
        return value;// 닿을 수 없는 코드
    }
}
console.log(nevertest("test"));
///////////////////////
function error(message: string): never {
    throw new Error(message);
}

function fail() {
    return error("error!!!");
}

fail();
///////////////////////

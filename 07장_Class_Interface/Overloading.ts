class SingleTypeChecker {
    constructor() { }
    typeCheck(value: string): void {
        console.log(`${typeof value} : ${value}`);
    }
}

class UnionTypeChecker extends SingleTypeChecker {
    constructor() { super(); }

    typeCheck(value: number): void;
    typeCheck(value: string): void;
    typeCheck(value: any): void {
        if (typeof value === "number") {
            console.log("숫자 : ", value);
        }
        else if (typeof value === "string") {
            console.log("문자열 : ", value);
        } else {
            console.log("기타 : ", value);
        }

    }

}

let unionTypeChecker = new UnionTypeChecker();
unionTypeChecker.typeCheck(123);
unionTypeChecker.typeCheck("happy");
// unionTypeChecker.typeCheck(true); // 에러

/*
myName(value: number | string): void {
        console.log(value);
    }
*/
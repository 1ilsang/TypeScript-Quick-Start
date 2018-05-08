type myId = string | undefined;
type User = {
    id: myId;
    alias? : string;
}
type MyArrayType = Array<number | boolean>;
let myArray: MyArrayType = [1, true];
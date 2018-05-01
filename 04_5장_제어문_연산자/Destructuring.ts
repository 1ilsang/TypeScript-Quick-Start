let {a, b = 88, c: d} = {a: "a-hi", c: "c-hi"};

console.log(a, b, d); // c 를 넣으면 에러

function printProfile({ name, nationality = "none" } = { name: "anonymous" }) {
    //선언과 할당의 차이를 생각해 보자.
    console.log(name, nationality);
}
printProfile();
printProfile({ name: "happy" }); // nationality는 디폴트 값인 ?가 정해졌으므로 생략 가능
printProfile({ name: "happy", nationality: "korea" });

printProfile({}); // name은 디폴트 값이 없으므로 생략 불가능
printProfile({ nationality: "korea" }); // name은 디폴트 값이 없으므로 생략 불가능
//{} 객체를 넣는 것이므로 선언만 되어 있는 name 의 경우 undefined 가 된다. 할당이 되지 않았다.

//////////////// Typescript
type C = {a:string, b?: number};
function fruit({a, b}: C):void{
    console.log(a, b);
}
fruit({a:"apple",b:10});
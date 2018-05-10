class Duck {
    speak() {
        console.log("Quak!");
    }

    swim() {
        console.log("Duck swimming");
    }
}

class Goose {
    speak() {
        console.log("squawk!");
    }

    swim() {
        console.log("Goose swimming");
    }
}

function swim(obj) {
    obj.speak();
    obj.swim();
}

let duck = new Duck();
let goose = new Goose();
swim(duck);

//타입 안전성 추가
// interface DuckGoose {
//     speak();
//
//     swim();
// }
//
// function swim(obj: DuckGoose) {
//     obj.speak();
//     obj.swim();
// }
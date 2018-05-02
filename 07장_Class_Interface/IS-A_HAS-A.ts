// Flashlight 클래스
class Flashlight {
    constructor(public lightIntensity) { }
}

// Bicycle 클래스
class Bicycle {
    constructor(public numberOfWheel: number) { }

    getNumberOfWheel(): number {
        return this.numberOfWheel;
    }
}

// Bicycle 클래스를 상속함(IS-A 관계)
class MountainBike extends Bicycle {
    flashlight: Flashlight;

    constructor(public numberOfWheel: number, public hasBackSaddle: boolean) {
        super(numberOfWheel);

        // 자전거가 후레쉬 라이트를 포함함(HAS-A 관계)
        this.flashlight = new Flashlight(90);
    }

    getHasBackSaddle() {
        return this.hasBackSaddle;
    }

    getNumberOfWheel() {
        return this.numberOfWheel;
    }
}

let hasBackSaddle = true;
let numberOfWheel = 2;
let mountainBike = new MountainBike(numberOfWheel, hasBackSaddle);
console.log("자전거의 안장 유무 : " + mountainBike.getHasBackSaddle());
console.log("자전거의 바퀴 개수 : " + mountainBike.getNumberOfWheel());

//Type aliasing
let emotion: { readonly name: string } = { name: "sad" };

function aliasing(pEmotion: { name: string }) {
    pEmotion.name = "happy";
}

console.log(emotion.name); // sad
// emotion.name = "happy"; // 에러
aliasing(emotion);
console.log(emotion.name); // happy
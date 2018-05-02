class Planet {
    public diameter: number; // 지름
    public test: number = 5;
    protected isTransduction: boolean = true; // 공전
    getIsTransduction(): boolean {
        return this.isTransduction;
    }

    stopTransduction(): void {
        console.log("stop1");
        this.isTransduction = false;
    }
}

class Earth extends Planet {
    public features: string[] = ["soil", "water", "oxyzen"];

    stopTransduction(): void {
        console.log("stop2");
        this.isTransduction = false;
    }
}

let earth: Planet = new Earth();
earth.diameter = 12656.2;
console.log("1번 : " + earth.diameter);
console.log("2번 : " + earth.getIsTransduction());
console.log("3번 : " + earth.test);
earth.stopTransduction();
console.log("3번 : " + earth.getIsTransduction());
// console.log(earth.features); // 접근 불가

/// 추상 클래스
abstract class Train {
    constructor(protected speed: number) { }

    speedUp(): void {
        this.speed++;
    }

    abstract getSpeed(): number;
}

class Ktx extends Train {
    constructor(protected speed: number) {
        super(speed);
    }

    public getSpeed(): number {
        return this.speed;
    }

    public speedUpUp(): void {
        this.speed += 2;
    }
}

let ktx: Train = new Ktx(300);
console.log("현재 속도 : " + ktx.getSpeed() + "km");
ktx.speedUp();
// ktx.speedUpUp();//ERR
console.log("현재 속도 : " + ktx.getSpeed() + "km");

//인터페이스 타입을 이용한 매개변수의 다형성
interface Monitor {
    getName(): string;
}

class Led implements Monitor {
    constructor(private name: string) { }
    getName(): string {
        return "LED => " + this.name;
    }
}

class Oled implements Monitor {
    constructor(private name: string) { }
    getName(): string {
        return "OLED => " + this.name;
    }
}

class MonitorDisplayTest {
    // 개선 전
    display1(monitor: Led | Oled) {
        if (monitor instanceof Led) {
            // 변수에 지정된 타입과 타입 어설션은 생략 가능
            let myMonitor: Led = <Led>monitor;
            return myMonitor.getName();
        }
        else if (monitor instanceof Oled) {
            let myMonitor: Oled = <Oled>monitor;
            return myMonitor.getName();
        }

    }
    // 개선 후
    display2(monitor: Monitor) {
        let myMonitor: Monitor = monitor;
        return myMonitor.getName();
    }
}

let displayTest = new MonitorDisplayTest();
console.log(`
1번 ${displayTest.display1(new Led("LED TV"))}
2번 ${displayTest.display1(new Oled("OLED TV"))}
3번 ${displayTest.display2(new Led("LED TV"))}
4번 ${displayTest.display2(new Oled("OLED TV"))}`);
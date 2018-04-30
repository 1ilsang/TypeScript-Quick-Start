let basket: any = 10;
basket = true;
basket = "banana";
console.log(basket);

let vList: any[] = [1, false, "happy"];
console.log(vList[0]);

let num1 = 50;
let num2: any = 50;
num1.noMethods();
num2.noMethods();

let number2: Object = 50;
console.log(typeof number2);
console.log(number2.toFixed(1));
let isDone: boolean = false

// error
// let b1: boolean = new Boolean(1);

let b1: Boolean = new Boolean(1);
console.log(b1)
console.log(b1.valueOf())

let b2: boolean = Boolean(1);
console.log(b2)
console.log(b2.valueOf())

let b3: boolean = false
console.log(b3)
console.log(b3.valueOf())

let decLiteral: number = 6;
console.log(decLiteral);

let hexLiteral: number = 0xf00d;
console.log(hexLiteral);
// ES6 中的二进制表示法
let binaryLiteral: number = 0b1010;
console.log(binaryLiteral);

// ES6 中的八进制表示法
let octalLiteral: number = 0o744;
console.log(octalLiteral);

let notANumber: number = NaN;
console.log(notANumber);

let infinityNumber: number = Infinity;
console.log(infinityNumber);

let myName: string = 'Tom';
let myAge: number = 25;

// 模板字符串
let sentence: string = `Hello, my name is ${myName}.
I'll be ${myAge + 1} years old next month.`;
console.log(sentence);

function alertName(): void {
  console.log('My name is Tom');
}

let u: undefined = undefined;
let n: null = null;

console.log(u)
console.log(n)

console.log(u === n)
console.log(n === u)
console.log(typeof n === typeof u)

let num: number = undefined
let u1: undefined
let num1: number = u1

let v: void
// let num2: number = v // error
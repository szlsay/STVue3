// function createArray(length: number, value: any): Array<any> {
//   let result = [];
//   for (let i = 0; i < length; i++) {
//       result[i] = value;
//   }
//   return result;
// }

// function createArray<T>(length: number, value: T): Array<T> {
//   let result: T[] = [];
//   for (let i = 0; i < length; i++) {
//       result[i] = value;
//   }
//   return result;
// }

// console.log(createArray(3, 'x'))

// // function swap<T, U>(tuple: [T, U]): [U, T] {
// //   return [tuple[1], tuple[0]];
// // }

// // console.log(swap([7, 'seven'])); // ['seven', 7]

// // function loggingIdentity<T>(arg: T): T {
// //   console.log(arg.length); //类型“T”上不存在属性“length”
// //   return arg;
// // }

// // interface Lengthwise {
// //   length: number;
// // }

// // function loggingIdentity<T extends Lengthwise>(arg: T): T {
// //   console.log(arg.length);
// //   return arg;
// // }

// // interface Lengthwise {
// //   length: number;
// // }

// // function loggingIdentity<T extends Lengthwise>(arg: T): T {
// //   console.log(arg.length);
// //   return arg;
// // }
// // //类型“number”的参数不能赋给类型“Lengthwise”的参数。
// // // loggingIdentity(7);
// // class Length implements Lengthwise {
// //   length: number;
// //   constructor(length){
// //     this.length = length
// //   }
// // }

// // let leng = new Length(120);
// // console.log(loggingIdentity(leng))

// // function copyFields<T extends U, U>(target: T, source: U): T {
// //   for (let id in source) {
// //       target[id] = (<T>source)[id];
// //   }
// //   return target;
// // }

// // let x = { a: 1, b: 2, c: 3, d: 4 };

// // copyFields(x, { b: 10, d: 20 });


// interface SearchFunc {
//   (source: string, subString: string): boolean;
// }

// let mySearch: SearchFunc;
// mySearch = function(source: string, subString: string) {
//     return source.search(subString) !== -1;
// }

// interface CreateArrayFunc {
//   <T>(length: number, value: T): Array<T>;
// }

// let createArray: CreateArrayFunc;
// createArray = function<T>(length: number, value: T): Array<T> {
//   let result: T[] = [];
//   for (let i = 0; i < length; i++) {
//       result[i] = value;
//   }
// }

// createArray(3, 'x'); // ['x', 'x', 'x']、、
interface CreateArrayFunc<T> {
  (length: number, value: T): Array<T>;
}

// let createArray: CreateArrayFunc<any>;
// createArray = function<T>(length: number, value: T): Array<T> {
//   let result: T[] = [];
//   for (let i = 0; i < length; i++) {
//       result[i] = value;
//   }
//   return result;
// }

// let createArray: CreateArrayFunc<any>;
// createArray = function<T>(length: number, value: T): Array<T> {
//     let result: T[] = [];
//     for (let i = 0; i < length; i++) {
//         result[i] = value;
//     }
//     return result;
// }

// createArray(3, 'x'); // ['x', 'x', 'x'] 

class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) { return x + y; };

function createArray<T = string>(length: number, value: T): Array<T> {
  let result: T[] = [];
  for (let i = 0; i < length; i++) {
      result[i] = value;
  }
  return result;
}

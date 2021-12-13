// function reverse(x: number): number;
// function reverse(x: string): string;
// function reverse(x: number | string): number | string {
//     if (typeof x === 'number') {
//         return Number(x.toString().split('').reverse().join(''));
//     } else if (typeof x === 'string') {
//         return x.split('').reverse().join('');
//     }
// }

// interface Alarm {
//   price: number;
// }
// interface Alarm {
//   weight: number;
// }

// interface Alarm {
//   price: number; // 虽然重复了，但是类型都是 `number`，所以不会报错
//   weight: number;
// }

// interface Alarm {
//   price: number;
// }
// interface Alarm {
//   price: string;  // 类型不一致，会报错
//   weight: number;
// }

interface Alarm {
  price: number;
  alert(s: string): string;
}
interface Alarm {
  weight: number;
  alert(s: string, n: number): string;
}
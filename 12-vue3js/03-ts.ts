// interface foo {
//   x: number
// }
// interface bar {
//   b: number
// }
// type intersection = foo & bar
// const result: intersection = {
//   x: 10,
//   b: 20
// }
// const result1: intersection = {
//   x: 10
// }  // error

function add (arg1: string, arg2: string): string
function add (arg1: number, arg2: number): number

// 实现
function add <T,U>(arg1: T, arg2: U) {
  // 在实现上我们要注意严格判断两个参数的类型是否相等，而不能简单的写一个 arg1 + arg2
  if (typeof arg1 === 'string' && typeof arg2 === 'string') {
    return arg1 + arg2
  } else if (typeof arg1 === 'number' && typeof arg2 === 'number') {
    return arg1 + arg2
  }
}

add(1, 2) // 3
add('1','2') //'1
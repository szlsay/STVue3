let arr0: number[] = [1, 1, 2, 3, 5];

// 不能将类型“string”分配给类型“number”
// let arr1: number[] = [1, '1', 2, 3, 5];

let arr2: number[] = [1, 1, 2, 3, 5];
// 类型“string”的参数不能赋给类型“number”的参数
// arr2.push('8');

let arr3: Array<number> = [1, 1, 2, 3, 5];

let arr4: Array<number | string> = [1, 1, 2, 3, 5, '6'];

interface NumberArray {
  [index: number]: number;
}
let arr5: NumberArray = [1, 1, 2, 3, 5];

function sum() {
  // 类型“IArguments”缺少类型“number[]”的以下属性: pop, push, concat, join 及其他 26 项
  // let args: number[] = arguments;

  let args0: {
        [index: number]: number;
        length: number;
        callee: Function;
    } = arguments;

  let args1: IArguments = arguments;

}

let list: any[] = ['xcatliu', 25, { website: 'http://xcatliu.com' }];
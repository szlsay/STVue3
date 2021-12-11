function sum(x: number = 1, y:number = 2): number{
  return x + y
}
console.log(sum());

let mysum = (x: number = 1, y:number = 2): number => x+y
console.log(mysum())

let myfun0: (x: number, y:number) => number = function (x: number = 1, y:number = 2): number{
  return x + y
}
console.log(myfun0)

let myfun1: (x, y) => number = function (x: number = 1, y:number = 2): number{
  return x + y
}
console.log(myfun1)
console.log(myfun1(1,3))


let myfun2: (x, y) => number = (x: number = 1, y:number = 2): number => x+y
console.log(myfun2)
console.log(myfun2(2,3))

interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
  return source.search(subString) !== -1;
}

console.log(mySearch('1234e', "3"))
console.log(mySearch('1234e', "8"))

// function buildName(firstName: string, lastName?: string) {
//   if (lastName) {
//       return firstName + ' ' + lastName;
//   } else {
//       return firstName;
//   }
// }
// let tomcat = buildName('Tom', 'Cat');
// let tom = buildName('Tom');
// console.log(tomcat)
// console.log(tom)

// 必选参数不能位于可选参数后
// function buildName(firstName?: string, lastName: string) {    
//   if (firstName) {        
//     return firstName + ' ' + lastName;    
//   } else {        
//     return lastName;    
//   }
// }

// function buildName(firstName: string, lastName: string = 'Cat') {    
//   return firstName + ' ' + lastName;
// }

// let tomcat = buildName('Tom', 'Cat');
// let tom = buildName('Tom');
// console.log(tomcat)
// console.log(tom)

function buildName(firstName: string = 'Tom', lastName: string) {    
  return firstName + ' ' + lastName;
}
let tomcat = buildName('Tom', 'Cat');
let cat = buildName(undefined, 'Cat');
console.log(tomcat) //Tom Cat
console.log(cat)  //Tom Cat


// function push(array, ...items) {    
//   items.forEach(function(item) {        
//     array.push(item);    
//   });
// }
// let a: any[] = [];
// push(a, 1, 2, 3);

// console.log(a) //[ 1, 2, 3 ]

function push(array: any[], ...items: any[]) {    
  items.forEach(function(item) {        
    array.push(item);    
  });
}
let a = [];
push(a, 1, 2, 3, '4');
console.log(a) //[ 1, 2, 3, '4' ]

function reverse(x: number | string): number | string | void {    
  if (typeof x === 'number') {        
    return Number(x.toString().split('').reverse().join(''));    
  } else if (typeof x === 'string') {        
    return x.split('').reverse().join('');    
  }
}

console.log(reverse(12345678)); //87654321
console.log(reverse('asdf'))  // fdsa

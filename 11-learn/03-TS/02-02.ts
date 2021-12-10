let str: string = 'seven';
// str = 7; //error

let str1: any = 'seven';
str1 = 3;

let anyThing: any = 'Tom';
// 编译通过，运行失败
// anyThing.setName('Jerry');
// anyThing.setName('Jerry').sayHello();
// anyThing.myName.setFirstName('Cat');
// console.log(anyThing)

let something;
something = 'seven';
something = 7;
console.log(something)

// 编译通过，运行失败
// something.setName('Tom');
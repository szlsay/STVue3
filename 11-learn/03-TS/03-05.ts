// class Animal{
//   public name: string;
//   constructor(name) {
//     this.name = name
//   }
//   sayHi(){
//     return `name: ${this.name}`
//   }
// }

// const animal = new Animal('hh')
// console.log(animal.sayHi());

// class Cat extends Animal {
//   constructor(name) {
//     super(name); // 调用父类的 constructor(name)
//     console.log(this.name);
//   }
//   sayHi() {
//     return 'cat-' + super.sayHi(); // 调用父类的 sayHi()
//   }
// }

// let c = new Cat('Tom'); // Tom
// console.log(c.sayHi()); // cat-name: Tom

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }

//   get name() {
//     return 'Jack';
//   }
//   set name(value) {
//     console.log('setter: ' + value);
//   }
// }

// let a = new Animal('Kitty'); // setter: Kitty
// a.name = 'Tom'; // setter: Tom
// console.log(a.name); // Jack

// class Animal {
//   static isAnimal(a) {
//     return a instanceof Animal;
//   }
// }

// let a = new Animal();
// Animal.isAnimal(a); // true
// // a.isAnimal(a); // TypeError: a.isAnimal is not a function

// class Animal {
//   name = 'Jack';
//   static age = 10;
//   constructor() {
//     // ...
//   }
// }

// let a = new Animal();
// console.log(a.name); // Jack
// console.log(Animal.age); // 10

// class Animal {
//   public name;
//   public constructor(name) {
//     this.name = name;
//   }
// }

// let a = new Animal('Jack');
// console.log(a.name); // Jack
// a.name = 'Tom';
// console.log(a.name); // Tom

// class Animal {
//   private name;
//   public constructor(name) {
//     this.name = name;
//   }
// }

// let a = new Animal('Jack');
// // console.log(a.name); //属性“name”为私有属性，只能在类“Animal”中访问
// // a.name = 'Tom'; //属性“name”为私有属性，只能在类“Animal”中访问。

// class Animal {
//   private name;
//   public constructor(name) {
//     this.name = name;
//   }
// }

// class Cat extends Animal {
//   constructor(name) {
//     super(name);
//     console.log(this.name); // Error: 属性“name”为私有属性，只能在类“Animal”中访问。
//   }
// }

// class Animal {
//   protected name;
//   public constructor(name) {
//     this.name = name;
//   }
// }

// class Cat extends Animal {
//   constructor(name) {
//     super(name);
//     console.log(this.name); 
//   }
// }

// class Animal {
//   public name;
//   protected constructor(name) {
//     this.name = name;
//   }
// }
// class Cat extends Animal {
//   constructor(name) {
//     super(name);
//   }
// }

// // let a = new Animal('Jack'); //类“Animal”的构造函数是受保护的，仅可在类声明中访问
// let c = new Cat('Jack');

// class Animal {
//   // public name: string;
//   public constructor(public name) {
//     // this.name = name;
//   }
// }

// class Animal {
//   readonly name;
//   public constructor(name) {
//     this.name = name;
//   }
// }

// let a = new Animal('Jack');
// console.log(a.name); // Jack
// // a.name = 'Tom'; // 无法分配到 "name" ，因为它是只读属性

// abstract class Animal {
//   public name;
//   public constructor(name) {
//     this.name = name;
//   }
//   public abstract sayHi();
// }

// //无法创建抽象类的实例。
// // let a = new Animal('Jack');

// abstract class Animal {
//   public name;
//   public constructor(name) {
//     this.name = name;
//   }
//   public abstract sayHi();
// }

// // 非抽象类“Cat”不会实现继承自“Animal”类的抽象成员“sayHi”
// class Cat extends Animal {
//   public eat() {
//     console.log(`${this.name} is eating.`);
//   }
// }

// let cat = new Cat('Tom');

// abstract class Animal {
//   public name;
//   public constructor(name) {
//     this.name = name;
//   }
//   public abstract sayHi();
// }

// class Cat extends Animal {
//   public sayHi() {
//     console.log(`Meow, My name is ${this.name}`);
//   }
// }

// let cat = new Cat('Tom');

class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  sayHi(): string {
    return `My name is ${this.name}`;
  }
}

let a: Animal = new Animal('Jack');
console.log(a.sayHi()); // My name is Jack
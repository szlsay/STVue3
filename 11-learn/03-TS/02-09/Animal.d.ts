declare class Animal {    
  name: string;    
  constructor(name: string);    
  sayHi(): string;
}

// declare class Animal {    
//   name: string;    
//   constructor(name: string);    
//   sayHi() {        
//     return `My name is ${this.name}`;    
//   };    // ERROR: 不能在环境上下文中声明实现.
// }
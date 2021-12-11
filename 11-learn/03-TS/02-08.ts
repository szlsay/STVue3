// interface Cat {
//   name: string;
//   run(): void;
// }
// interface Fish {
//   name: string;
//   swim(): void;
// }

// function getName(animal: Cat | Fish) {
//   return animal.name;
// }

interface Cat {
  name: string;
  run(): void;
}
interface Fish {
  name: string;
  swim(): void;
}

// 类型“Cat”上不存在属性“swim”
// function isFish(animal: Cat | Fish) {
//   if (typeof animal.swim === 'function') {
//       return true;
//   }
//   return false;
// }

function isFish(animal: Cat | Fish) {
  if (typeof (animal as Fish).swim === 'function') {
      return true;
  }
  return false;
}

let cat: Cat = {
  name: 'cat',
  run(){
    console.log('fish-swim')
  }
}

let fish: Fish = {
  name: 'fish',
  swim(){
    console.log('fish-swim')
  }
}

console.log(isFish(cat))
console.log(isFish(fish))

function swim(animal: Cat | Fish) {
  (animal as Fish).swim();
}

swim(fish)
// swim(cat) //TypeError: animal.swim is not a function

// class ApiError extends Error {
//   code: number = 0;
// }
// class HttpError extends Error {
//   statusCode: number = 200;
// }

// function isApiError(error: Error) {
//   if (typeof (error as ApiError).code === 'number') {
//       return true;
//   }
//   return false;
// }

// console.log(isApiError(new ApiError())) // true
// console.log(isApiError(new HttpError())) //false

// class ApiError extends Error {    
//   code: number = 0;
// }
// class HttpError extends Error {    
//   statusCode: number = 200;
// }
// function isApiError(error: Error) {    
//   if (error instanceof ApiError) {        
//     return true;    
//   }    
//   return false;
// }

// console.log(isApiError(new ApiError())) // true
// console.log(isApiError(new HttpError())) //false

// interface ApiError extends Error {    
//   code: number;
// }
// interface HttpError extends Error {    
//   statusCode: number;
// }
// //“ApiError”仅表示类型，但在此处却作为值使用
// function isApiError(error: Error) {    
//   if (error instanceof ApiError) {        
//     return true;    
//   }    
//   return false;
// }

interface ApiError extends Error {    
  code: number;
}
interface HttpError extends Error {    
  statusCode: number;
}
function isApiError(error: Error) {    
  if (typeof (error as ApiError).code === 'number') {        
    return true;    
  }    
  return false;
}

const apiError: ApiError = {
  code: 200,
  message: 'ok',
  name: 'result'
}

const httpError: HttpError = {
  statusCode: 200,
  message: 'ok',
  name: 'result'
}

console.log(isApiError(apiError)) // true
console.log(isApiError(httpError)) // false

// const foo: number = 1;
// // 类型“number”上不存在属性“length”
// foo.length = 1;

// interface Animal {    
//   name: string;
// }

// interface Cat {    
//   name: string;    
//   run(): void;
// }

// let tom: Cat = {    
//   name: 'Tom',    
//   run: () => { 
//     console.log('run') 
//   }
// };

// let animal: Animal = tom;
// console.log(tom)
// console.log(animal)

// interface Animal {    
//   name: string;
// }

// interface Cat extends Animal {    
//   run(): void;
// }

// let tom: Cat = {    
//   name: 'Tom',    
//   run: () => { 
//     console.log('run') 
//   }
// };

// let animal: Animal = tom;
// console.log(tom)
// console.log(animal)

// interface Animal {    
//   name: string;
// }
// interface Cat {    
//   name: string;    
//   run(): void;
// }
// function testAnimal(animal: Animal) {    
//   return (animal as Cat);
// }
// function testCat(cat: Cat) {    
//   return (cat as Animal);
// }

// let tom: Cat = {    
//   name: 'Tom',    
//   run: () => { 
//     console.log('run') 
//   }
// };

// let animal: Animal = tom;
// console.log(testAnimal(tom))
// console.log(testAnimal(animal))
// console.log(testCat(tom))
// //类型 "Animal" 中缺少属性 "run"，但类型 "Cat" 中需要该属性
// // console.log(testCat(animal))

interface Cat {    
  run(): void;
}
interface Fish {    
  swim(): void;
}
function testCat(cat: Cat) {    
  return (cat as any as Fish);
}

// function toBoolean(something: any): boolean {    
//   return something as boolean;
// }
// console.log(toBoolean(1))// 返回值为 1

function toBoolean(something: any): boolean {    
  return Boolean(something);
}

console.log(toBoolean(1)) // 返回值为 true

// interface Animal {    
//   name: string;
// }
// interface Cat {    
//   name: string;    
//   run(): void;
// }
// const animal: Animal = {    
//   name: 'tom'
// };
// let tom = animal as Cat;

// console.log(tom)

interface Animal {    
  name: string;
}

interface Cat {    
  name: string;    
  run(): void;
}
const animal: Animal = {    
  name: 'tom'
};

//类型 "Animal" 中缺少属性 "run"，但类型 "Cat" 中需要该属性。
// let tom: Cat = animal;

function getCacheData<T>(key: string): T {    
  return (window as any).cache[key];
}
interface Cat {    
  name: string;    
  run(): void;
}
const tom = getCacheData<Cat>('tom');
tom.run();
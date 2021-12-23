// 01-语法
// const origin = {}
// const obj = new Proxy(origin, {
//   get: function(target, propkey, receiver) {
//     console.log('target:', target)
//     console.log('propkey:', propkey)
//     console.log('receiver:', receiver)
//     return '10'
//   }
// })

// // target: {}
// // propkey: a
// // receiver: {}
// console.log(obj.a); //10
// // target: {}
// // propkey: b
// // receiver: {}
// console.log(obj.b); //10

// console.log(origin.a); //undefined
// console.log(origin.b); //undefined

// // 02-handler.get
// const person = {
//   like: 'vue'
// }

// const obj = new Proxy(person, {
//   get: function(target, propkey) {
//     console.log('target:', target)
//     console.log('propkey:', propkey)
//     if (propkey in target) {
//       return target[propkey]
//     } else {
//       throw new ReferenceError("Prop name \"" + propkey + "\" does not exist.");
//     }
//   }
// })

// // target: { like: 'vue' }
// // propkey: like
// console.log(obj.like); //vue
// // target: { like: 'vue' }
// // propkey: test
// console.log(obj.test); //ReferenceError: Prop name "test" does not exist.

// const obj = {}
// Object.defineProperty(obj, 'a', {
//   configurable: false,
//   enumerable: false,
//   value: 10,
//   writable: false
// })
// const p = new Proxy(obj, {
//   get: function(target, prop) {
//     return 20
//   }
// })

// console.log(p.b); // 20
// console.log(p.a); // property 'a' is a read-only and non-configurable data property

// // 03-可撤消的Proxy
// var revocable = Proxy.revocable({}, {
//   get(target, name) {
//     return "[[" + name + "]]";
//   }
// });
// var proxy = revocable.proxy;
// console.log(proxy.foo); // "[[foo]]"

// revocable.revoke();
// console.log(proxy.foo); // 抛出 TypeError
// proxy.foo = 1 // 还是 TypeError
// delete proxy.foo; // 又是 TypeError
// typeof proxy // "object"，因为 typeof 不属于可代理操作

// const target = {
//   _id: '1024',
//   name: 'vuejs'
// }

// const validators = {
//   name(val) {
//     return typeof val === 'string';
//   },
//   _id(val) {
//     return typeof val === 'number' && val > 1024;
//   }
// }

// const createValidator = (target, validator) => {
//   return new Proxy(target, {
//     _validator: validator,
//     set(target, propkey, value, proxy) {
//       let validator = this._validator[propkey](value)
//       if (validator) {
//         return Reflect.set(target, propkey, value, proxy)
//       } else {
//         throw Error(`Cannot set ${propkey} to ${value}. Invalid type.`)
//       }
//     }
//   })
// }

// const proxy = createValidator(target, validators)

// proxy.name = 'vue-js.com' // vue-js.com
// proxy.name = 10086 // Uncaught Error: Cannot set name to 10086. Invalid type.
// proxy._id = 1025 // 1025
// proxy._id = 22 // Uncaught Error: Cannot set _id to 22. Invalid type


// // 04-私有属性
// const target = {
//   _id: '1024',
//   name: 'vuejs'
// }

// const proxy = new Proxy(target, {
//   get(target, propkey, proxy) {
//     if (propkey[0] === '_') {
//       throw Error(`${propkey} is restricted`)
//     }
//     return Reflect.get(target, propkey, proxy)
//   },
//   set(target, propkey, value, proxy) {
//     if (propkey[0] === '_') {
//       throw Error(`${propkey} is restricted`)
//     }
//     return Reflect.set(target, propkey, value, proxy)
//   }
// })

// proxy.name // vuejs
// proxy._id // Uncaught Error: _id is restricted
// proxy._id = '1025' // Uncaught Error: _id is restricted


// 05-为什么要用Proxy重构
// const obj = {}
// Object.defineProperty(obj, "a", {
//   value: 1,
//   writable: false, // 是否可写 
//   configurable: false, // 是否可配置
//   enumerable: false // 是否可枚举
// })

// // 上面给了三个false, 下面的相关操作就很容易理解了
// obj.a = 2 // 无效
// delete obj.a // 无效
// for (key in obj) {
//   console.log(key) // 无效 
// }

// const obj = {};
// Object.defineProperty(obj, 'a', {
//   set(val) {
//     console.log(`开始设置新值: ${val}`)
//   },
//   get() {
//     console.log(`开始读取属性`)
//     return 1;
//   },
//   writable: true
// })

// obj.a = 2 // 开始设置新值: 2
// obj.a // 开始获取属性

// function defineReactive(data, key, val) {
//   Object.defineProperty(data, key, {
//     enumerable: true,
//     configurable: true,
//     get: function defineGet() {
//       console.log(`get key: ${key} val: ${val}`);
//       return val;
//     },
//     set: function defineSet(newVal) {
//       console.log(`set key: ${key} val: ${newVal}`);
//       val = newVal;
//     }
//   })
// }

// function observe(data) {
//   Object.keys(data).forEach(function(key) {
//     defineReactive(data, key, data[key]);
//   })
// }

// let test = [1, 2, 3];

// observe(test);

// test[0] = 4 // set key: 0 val: 4


// const methodsToPatch = [
//   'push',
//   'pop',
//   'shift',
//   'unshift',
//   'splice',
//   'sort',
//   'reverse'
// ]

// methodsToPatch.forEach(function(method) {
//   // 缓存原生数组
//   const original = arrayProto[method]
//     // def使用Object.defineProperty重新定义属性
//   def(arrayMethods, method, function mutator(...args) {
//     const result = original.apply(this, args) // 调用原生数组的方法

//     const ob = this.__ob__ // ob就是observe实例observe才能响应式
//     let inserted
//     switch (method) {
//       // push和unshift方法会增加数组的索引，但是新增的索引位需要手动observe的
//       case 'push':
//       case 'unshift':
//         inserted = args
//         break
//         // 同理，splice的第三个参数，为新增的值，也需要手动observe
//       case 'splice':
//         inserted = args.slice(2)
//         break
//     }
//     // 其余的方法都是在原有的索引上更新，初始化的时候已经observe过了
//     if (inserted) ob.observeArray(inserted)
//       // dep通知所有的订阅者触发回调
//     ob.dep.notify()
//     return result
//   })
// })
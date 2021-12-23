// const set = new Set([4, 3, 2, 1])
// console.log(set);
// console.log(set.size);
// set.add(5)
// console.log(set);
// console.log(set.has(3));
// console.log(set.has(6));
// set.clear()
// console.log(set);

// console.log(Array.from(set.keys()));
// console.log(Array.from(set.values()));
// console.log(Array.from(set.entries()));

// // 数组去重
// let arr = [1, 1, 2, 3];
// let unique = [...new Set(arr)];

// let a = new Set([1, 2, 3]);
// let b = new Set([4, 3, 2]);

// // 并集
// let union = [...new Set([...a, ...b])]; // [1,2,3,4]
// console.log(union);
// // 交集
// let intersect = [...new Set([...a].filter(x => b.has(x)))]; // [ 2, 3 ]
// console.log(intersect);
// // 差集
// let difference = Array.from(new Set([...a].filter(x => !b.has(x)))); //[ 1 ]
// console.log(difference);

// let map = new Map()
// map.set('name', 'vuejs.cn');
// console.log(map.get('name'))
// console.log(map.size) // 1
// console.log(new Map([
//     ['name', 'vue3js.cn'],
//     ['age', '18']
//   ]).size) // 2

// let map = new Map()
// map.set('name', 'vue3js.cn')
// map.set('age', '18')
// console.log(map) // Map {"name" => "vuejs.cn", "age" => "18"}
// map.get('name') // vue3js.cn 
// map.has('name') // true
// map.delete('name')
// map.has('name') // false
// map.clear() // Map {}

// let map = new Map()
// map.set('name', 'vue3js.cn')
// map.set('age', '18')

// console.log([...map.keys()]) // ["name", "age"]
// console.log([...map.values()]) // ["vue3js.cn", "18"]
// console.log([...map.entries()]) // [['name','vue3js.cn'], ['age','18']]

// // name vuejs.cn
// // age 18
// map.forEach((value, key) => { console.log(key, value) })

// 解构
// const map = new Map([
//   [1, 1],
//   [2, 2],
//   [3, 3]
// ])
// console.log([...map]) // [[1, 1], [2, 2], [3, 3]]

// // Array.from()
// const map = new Map([
//   [1, 1],
//   [2, 2],
//   [3, 3]
// ])
// console.log(Array.from(map)) // [[1, 1], [2, 2], [3, 3]]

// const map = new Map([
//   [1, 1],
//   [2, 2],
//   [3, 3]
// ])
// console.log(map) // Map {1 => 1, 2 => 2, 3 => 3}

// // 非字符串键名会被转换为字符串
// function mapToObj(map) {
//   let obj = Object.create(null)
//   for (let [key, value] of map) {
//     obj[key] = value
//   }
//   return obj
// }
// const map = new Map().set('name', 'vue3js.cn').set('age', '18')
// console.log(mapToObj(map)); // {name: "vue3js.cn", age: "18"}

let obj = { "a": 1, "b": 2 };
let map = new Map(Object.entries(obj))
console.log(map)
// let tom: [string, number] = ['Tom', 25];

// let tom: [string, number]; // TypeError: Cannot set properties of undefined (setting '0')

let tom: [string, number] = ["", 0]
tom[0] = 'Tom';
tom[1] = 25;
console.log(tom)

tom[0].slice(1);
tom[1].toFixed(2);
console.log(tom)

// tom = ['s'] // 不能将类型“[string]”分配给类型“[string, number]”

tom.push('male');
console.log(tom)
// tom.push(true); //类型“boolean”的参数不能赋给类型“string | number”的参数

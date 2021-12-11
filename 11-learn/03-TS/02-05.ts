interface Person {
  name: string
  age?: number
  [propName: string]: any
  readonly id?: number
}

let tom: Person = {
  name: 'Tom',
  age: 25
};
console.log(tom)

// 类型 "{ name: string; }" 中缺少属性 "age"，但类型 "Person" 中需要该属性。 
// 解决：age改为可选值
let li: Person = {
  name: 'li'
};
console.log(li)

//不能将类型“{ name: string; sex: string; }”分配给类型“Person”。对象文字可以只指定已知属性，并且“sex”不在类型“Person”中。
// 解决：[propName: string]: any;
let hh: Person = {
  name: 'hh',
  sex: 'men'
}
console.log(hh)

let st: Person = {
  id: 10,
  name: 'st'
}
console.log(st)
st.name = 'say'

// 无法分配到 "id" ，因为它是只读属性
// st.id = 11
console.log(st)
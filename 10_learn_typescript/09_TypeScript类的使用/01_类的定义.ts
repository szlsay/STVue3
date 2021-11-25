class Person {
  name: string = "1"
  age: number = 2

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  eating() {
    console.log(this.name + " eating")
  }
}

const p = new Person("why", 18)
// const p = new Person()
console.log(p.name)
console.log(p.age)
p.eating()

export {}

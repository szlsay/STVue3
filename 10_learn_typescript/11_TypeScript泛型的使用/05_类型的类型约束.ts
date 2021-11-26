interface ILength {
  length: number
}

function getLength<T extends ILength>(arg: T) {
  return arg.length
}

console.log(getLength("abc"));
console.log(getLength(["abc", "cba"]));
console.log(getLength({length: 100}));

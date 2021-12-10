let myFavoriteNumber: string | number;
myFavoriteNumber = 'seven';
myFavoriteNumber = 7;
// myFavoriteNumber = true; //error

//error
// function getLength(something: string | number): number {
//   return something.length; 
// }

function getString(something: string | number): string {
  return something.toString();
}

let strnum: string | number;
strnum = 'seven';
console.log(strnum.length); // 5
strnum = 7;
// console.log(myFavoriteNumber.length); // 编译时报错
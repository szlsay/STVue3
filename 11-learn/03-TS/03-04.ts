// enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat};

// console.log(Days["Sun"] === 0); // true
// console.log(Days["Mon"] === 1); // true
// console.log(Days["Tue"] === 2); // true
// console.log(Days["Sat"] === 6); // true

// console.log(Days[0] === "Sun"); // true
// console.log(Days[1] === "Mon"); // true
// console.log(Days[2] === "Tue"); // true
// console.log(Days[6] === "Sat"); // true

// enum Days {Sun = 7, Mon = 1, Tue, Wed, Thu, Fri, Sat};

// console.log(Days["Sun"] === 7); // true
// console.log(Days["Mon"] === 1); // true
// console.log(Days["Tue"] === 2); // true
// console.log(Days["Sat"] === 6); // true

// enum Days {Sun = 3, Mon = 1, Tue, Wed, Thu, Fri, Sat};

// console.log(Days["Sun"] === 3); // true
// console.log(Days["Wed"] === 3); // true
// console.log(Days[3] === "Sun"); // false
// console.log(Days[3] === "Wed"); // true

// enum Days {Sun = 7, Mon, Tue, Wed, Thu, Fri, Sat = <any>"S"};

// enum Days {Sun = 7, Mon = 1.5, Tue, Wed, Thu, Fri, Sat};
// console.log(Days["Sun"] === 7); // true
// console.log(Days["Mon"] === 1.5); // true
// console.log(Days["Tue"] === 2.5); // true
// console.log(Days["Sat"] === 6.5); // true

// enum Color {Red, Green, Blue = "blue".length};

//Error: 枚举成员必须具有初始化表达式。
// enum Color {Red = "red".length, Green, Blue};
// interface Alarm {
//   alert(): void;
// }

// class Door {
// }

// class SecurityDoor extends Door implements Alarm {
//   alert() {
//       console.log('SecurityDoor alert');
//   }
// }

// class Car implements Alarm {
//   alert() {
//       console.log('Car alert');
//   }
// }

// class St implements Alarm {
//   alert(): void {
//     // throw new Error("Method not implemented.");
//     console.log('hello st')
//   }
// }

// new St().alert()

// interface Alarm {
//   alert(): void;
// }

// interface Light {
//   lightOn(): void;
//   lightOff(): void;
// }

// class Car implements Alarm, Light {
//   alert() {
//       console.log('Car alert');
//   }
//   lightOn() {
//       console.log('Car light on');
//   }
//   lightOff() {
//       console.log('Car light off');
//   }
// }

// new Car().alert();
// new Car().lightOn();
// new Car().lightOff();

// interface Alarm {
//   alert(): void;
// }

// interface LightableAlarm extends Alarm {
//   lightOn(): void;
//   lightOff(): void;
// }

// class Point {
//   x: number;
//   y: number;
//   constructor(x: number, y: number) {
//       this.x = x;
//       this.y = y;
//   }
// }

// interface Point3d extends Point {
//   z: number;
// }

// let point3d: Point3d = {x: 1, y: 2, z: 3};
// console.log(point3d)

class Point {
  /** 静态属性，坐标系原点 */
  static origin = new Point(0, 0);
  /** 静态方法，计算与原点距离 */
  static distanceToOrigin(p: Point) {
      return Math.sqrt(p.x * p.x + p.y * p.y);
  }
  /** 实例属性，x 轴的值 */
  x: number;
  /** 实例属性，y 轴的值 */
  y: number;
  /** 构造函数 */
  constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
  }
  /** 实例方法，打印此点 */
  printPoint() {
      console.log(this.x, this.y);
  }
}

interface PointInstanceType {
  x: number;
  y: number;
  printPoint(): void;
}

let p1: Point;
let p2: PointInstanceType;

// 使用type声明类型别名
  // type后面跟别名,等号右边跟具体类型，多个可以用|分割开
  // 右边也可是一个对象，对象中指定key以及key对应的类型
type ID = number | string
type Point = {
  x: number,
  y: number,
  z: number ,
  q?:string
}

let point1: Point = {
  x: 1,
  y:2,
  z:3,
  q: 'string'
}

console.log(point1,point1.z); // { x: 1, y: 2, z: 3, q: 'string' } 3

function bar(name:ID) {
  return name
}

function printPoint(point: Point) {
  console.log(point.x);
  console.log(point.y);
  console.log(point.z);
}
printPoint({x:10,y:20,z:30})


function sumPoint(point: Point) {
  console.log(point);
  return point.x + point.y + point.z
}
console.log(sumPoint({x:20,y:30,z:40}));


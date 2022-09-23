interface Person {
  name: string,
  readonly age: number,
  friends?: {
    name: string,
    age?: number,
    sex?: boolean
  }
}

let p1: Person = {
  name: 'susa3n',
  age: 18,
  friends: {
    name: 'lisi',
    age: 19,
    sex: true
  }
}
/*
  {
    name: 'susa3n',
    age: 18,
    friends: { name: 'lisi', age: 19, sex: true }
  }
*/
console.log(p1);
// p1.age = 19 // 报错：无法分配到 "age" ，因为它是只读属性。
console.log(p1.friends?.name); // lisi


// ----------------------------------------------------------------------

// 确定接口中的key

interface  fruits {
  [index: number]: string
}

let fuits1: fruits = ['apple','banana','orange']

console.log(fuits1); // [ 'apple', 'banana', 'orange' ]

// let fuits2: fruits = ['apple','banana','orange',1] // 报错：不能将类型“number”分配给类型“string”


interface  NumList {
  [index: number]: number
}

let numList:NumList = [1,2,3,4]
// let numList1:NumList = [1,2,3,4,'5'] // 报错
console.log(numList); // [1,2,3,4]



export { }
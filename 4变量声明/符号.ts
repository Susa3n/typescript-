// 可选链，

// 定义的类型Info，其中sex和friends属性，可填可不填，friends中age和sex也是可填可不填
type Info = {
  name: string,
  age: number,
  sex?: boolean,
  friends?: {
    name: string,
    age?: number,
    sex?: boolean,
  }
}
// 使用Info声明一个变量info1

let info1: Info = {
  name: 'susa3n',
  age: 18,
  sex: false,
  friends: {
    name: 'lisi',
    sex: true,
  }
}

let info2: Info = {
  name: 'lisi',
  age: 18,
}
// 他的主要作用当对象的属性不存在时，会直接返回undefined，如果存在才会继续执行

// 读取info1中friends.age属性
console.log(info1.friends?.age); // undefined
console.log(info1.friends?.name); // lisi

// 读取info2中friends.age属性
console.log(info2.friends?.age); // undefined





// ??
  // 空值合并操作符，当操作符左侧为null或undefined时，返回其右侧操作数，否则返回左侧操作数
  const message = 'hello'

  console.log(message ?? 'world'); // hello

  const message1 = null || undefined
  console.log(message1 ?? 'world'); // world

  


// !!
  // 将一个其他类型转换成boolean类型
  // 类似于Boolean(变量)的方式
console.log(!!'111'); // true
console.log(!!undefined);  // false



export {}

// 定义函数 接受一个参数 类型为字符串格式
function greet(name: string) {
  console.log(`hello ${name.toLocaleUpperCase()}`)
}

greet('susa3n') // 成功状态

// greet(123) // 提示报错：类型“number”的参数不能赋给类型“string”的参数
// greet('lisi','xxx') // 编译报错： Expected 1 arguments, but got 2.




// 函数返回值类型状态
  // 如果没有返回值 默认：void
  // 返回值的类型注解可写可不写，会根据返回值进行推断


function foo(name:string):string {
  return name.toLocaleLowerCase()
}

// function foo(name:string) {
//   return name.toLocaleLowerCase()
// }



function bar(num1:number,num2:number):number {
  return num1 + num2
}

bar(1,2)



// 函数接收对象为参数
// 使用一个对象作为类型
  // 在对象中可以添加属性并告知是什么数据类型
  // 属性之间用,分割，参数都可设为可选额
  // 每个属性的类型部分也是可选的，如果不指定默认any
function bar1(info: {name: (string | number),age: number,sex?: number}) {
  console.log('name：',info.name); // name： susa3n
  console.log('age：',info.age); // age： 18
}
bar1({name:'susa3n', age:18, sex:1})
bar1({name:'susa3n', age:18})


export {}



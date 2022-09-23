// 声明变量进行类型注解时，可以用括号配合|符，指定一个变量可以设置多个数据类型
let name: (string | number | symbol) = 'lisi'
name = '1'
name = 1
name = Symbol('susa3n')


// 同理函数中的参数也是一样

function bar(name: (number | string | symbol)) {
  if (typeof name == 'string') {
    return name.toLocaleUpperCase()
  } else if (typeof name == 'number') {
    return name
  }
}
console.log(bar('susa3n'));

console.log(bar(111));

console.log(bar(Symbol('title')));


// 函数中参数还可设为是否可填的（可选参数）
  // 设置完可选参数就代表 声明类型和undefined的联合声明
function foo(name: string, age?: number, sex?: boolean) {

}

function foo1(name: string, age: (number | undefined), sex: (boolean | undefined)) {

}

// foo和foo1性质上是相同的






export { }
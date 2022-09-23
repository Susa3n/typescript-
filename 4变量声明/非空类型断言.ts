// 如果在函数内使用?声明的参数，参数名后紧跟?
// 代表如果没值就跳过当前语句

function foo(name?: string) { 
  return name?.toLocaleUpperCase()
}

console.log(foo()); // undefined

console.log(foo('susa3n')); // SUSA3N


export {}
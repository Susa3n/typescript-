// unknow也是一种数据类型，描述不确定的类型，比如下方的列子

function fo():number {
  return 123
}

function bar():string {
  return '字符串'
}
// 根据条件执行对应的函数并且赋值给变量。不知道函数返回值的类型可以用unknow代替
let result:unknown
let token:boolean = true
if(token) {
  result = fo()
}else {
  result = bar()
}


console.log(result);


export {}

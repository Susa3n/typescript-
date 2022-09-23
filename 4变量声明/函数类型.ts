type CalcFunc = (num1: number,num2: number) => void // 代表一个函数类型


// 定义calc函数参数接受一个函数类型为CalcFunc类型
function calc(fn: CalcFunc) {
  return fn(1,2)
}

function sum(num1: number,num2: number) {
  return num1 + num2
}


function mul(num1: number,num2: number) {
  return num1 * num2
}


console.log(calc(sum)); // 3
console.log(calc(mul)); // 2

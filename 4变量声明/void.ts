// void通常指一个函数是没有返回值，那么他的返回值类型就是void
  // 函数内部不使用返回值 根据类型推导 默认是void类型 

function fo(o: number, n: number): void {
  console.log(o + n);
}

function bar(o:string) {
  console.log(o);
}

bar('test')


export {}
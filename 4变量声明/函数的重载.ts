// 抛出一个问题？
  // 一个函数内接受两个参数（字符串或者数值类型），把他们相加到一起
  // 如何声明这个函数
/*
function add(o: string | number,n: string | number):void {
    return o + n
}
这种声明是错误的方式，那该如何编写一个函数呢。
  编写不同的重载签名来表示函数可以以不同的方式调用
  一般编写两个或以上的重载签名，再编写一个通用函数以及实现
  根据参数的类型以及返回值的类型进而执行
  如果参数类型或者值类型不匹配编译阶段会报错
*/

function add(o:string,n:string): string;
function add(o:number,n:number): number;
function add(o:string,n:number): string;
function add(o:number,n:string): string;
function add(o:object,n:object): string; // 根据返回值将参数转成返回值同类型 再执行函数
function add(o:any,n:any):any {
  return o + n
}

console.log(add('hello','world')); // helloworld
console.log(add(1,2)); // 3
console.log(add('hello',2)); // hello2
console.log(add(2,'hello')); // 2hello


console.log(add({},{})); // [object Object][object Object]



// ------------------------------------------------------------------------------


// 需求：定义一个函数，可以传入字符串或者数组获取其长度？
// 实现一：通过联合类型
function getLen1(payload: (string| any[])) {
  return payload.length
}

console.log(getLen1('susa3n')); // 6
console.log(getLen1(['susa3n']));  // 1

// 实现二：重载函数
function getLen2(payload: string):number;
function getLen2(payload: any[]):number;
function getLen2(payload: any) {
  return payload.length
}

console.log(getLen2('susa3n')); // 6
console.log(getLen2(['susa3n']));  // 1

// 看完两种实现还是推荐第一种 联合类型

export {}
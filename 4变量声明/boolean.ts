// 1.声明布尔值 一般还是用第一种声明方式
const flag: boolean = true // 创建一个boolean值
const token: boolean = 2 > 1 // 这样也可声明

if(flag) {
  console.log(flag,token); // true true
}else {
  console.log(!flag);
}

// 声明布尔的实例
const flag1:Boolean = new Boolean(1) // 创建一个Boolean的实例
if(flag1) {
  console.log(flag1); // [Boolean: true]
}


export {}
// 设置any类型的变量

// 使用any声明的变量可以赋值任何类型的值，并且可以获取或使用变量不存在的属性及方法
// 使用变量不存在的属性或方法时如果有问题会在编译阶段不通过
let info: any = 18

info = 'susa3n'

info = {}

info = []

info = null

info = undefined
// console.log(info.a);
// info.a()


const list: any[] = ['name',18,'sex']
list[0] = 'lisi'

console.log(list);



export {}
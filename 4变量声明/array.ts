// 两种方式
let names1: string[] = ['susa3n','lisi'] // 推荐使用第一种方式
let names2: Array<string> = ['susa3n','lisi']


names1.push('zhangsan')
names2.push('zhangsan')
// names1.push(1)  报错
// names2.push(2)  报错


console.log(names1); // [ 'susa3n', 'lisi', 'zhangsan' ]
console.log(names2); // [ 'susa3n', 'lisi', 'zhangsan' ]

export {}

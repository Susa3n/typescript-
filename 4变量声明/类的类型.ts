// 类本身可以做为一种数据类型声明实例，不用通过new，但是原型上的方法需要手动指定
// 还是推荐第一种用法

// 第一种：new
class Person {
  name: string 
  constructor(name: string) {
    this.name = name
  }

  runing() {
    console.log(this.name + 'is runing');
  }
}
let p1 = new Person('susa3n')
console.log(p1,p1.name,p1.runing()); // Person { name: 'susa3n' } susa3n undefined



// 第二种：类
const p2: Person = {
  name: 'lisi',
  runing(){
    console.log(this.name + 'is runing runing');
  }
}
console.log(p2,p2.name,p2.runing()); // { name: 'lisi', runing: [Function: runing] } lisi undefined

export {}

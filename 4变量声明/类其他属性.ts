// 定义类时也可给对应的属性添加修饰符
  // public 默认值，修饰是在任何地方都是可见。不管是当前类还是子类都可以
  // private 只有在当前类才可以看的到
class Person {
  readonly name: string
  constructor(name: string) {
    this.name = name
  }

  runing():void {
    console.log(this.name + ' is runing');
  }



}

const p = new Person('susa3n')

console.log(p.name); // susa3n
// p.name = 'xxxx' // 无法分配到 "name" ，因为它是只读属性。


// ----------------------------------------------------------------------------------

class Person1 {
  private _name: string
  constructor(_name: string) {
    this._name = _name
  }


  get name() {
    return this._name
  }

  set name(newValue) {
    this._name = newValue
  }


}

let p1 = new Person1('susa3n')
// console.log(p1._name); // 私有属性实例无法读取
// 解决：可以通过get 和 set

console.log(p1.name); // susa3n
































export {}
// 与JavaScript不同的是定义类时，需要再类内部定义属性的类型
class Person {
  name: string
  age: number
  sex: boolean | undefined
  constructor(name: string,age: number,sex?: boolean) {
    this.name = name
    this.age = age
    this.sex = sex
  }

  runing():void {
    console.log(this.name + ' is runing');
  }


  eating():void {
    console.log(this.name + this.age + ' is eating');
  }
}

const p1 = new Person('susa3n',18,false)
console.log(p1); // Person { name: 'susa3n', age: 18, sex: false }
p1.runing()
p1.eating()



// -------------------------------------------------------------------------
// 继承

class Student extends Person {
    team: number
    constructor(name:string,age:number,sex:boolean,team:number) {
      super(name,age,sex)
      this.team = team
    }

    studying() {
      console.log(this.name + `in ${this.team} class on studying`);
    }
}

const son1 = new Student('son',14,true,2) // 继承了父类的构造函数
console.log(son1); // Student { name: 'son', age: 14, sex: true, team: 2 }
son1.studying()
son1.eating() // 继承了父类的原型对象
























export {}
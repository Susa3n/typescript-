// 这样声明的对象 就只是一个对象的实例 
  // 不能通过对象名.属性名访问子属性。编译时会把对象看做一个Obeject的实例
  // 导致声明的对象既不能赋值也不能读取
let info: object = {
  name: 'susa3n',
  age: 18,
  fn:function() { console.log(this)}
}





console.log(info);

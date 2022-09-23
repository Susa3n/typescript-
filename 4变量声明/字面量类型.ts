// 字面量类型声明
  // 变量名后跟: 以及对应的字面量，代表此变量只可以赋值给该字面量，用于一个准确的值
  // 配合联合类型可以指定多个字面量
  // message1和message2效果一样
let message: 'hello word' = 'hello word'



let message1: ('hello word' | 'susa3n') = 'hello word'

message1 = 'susa3n'

console.log(message1); // susa3n





type Message = 'hello word' | 'susa3n'
let message2: Message = 'susa3n' 
message2 = 'hello word'


console.log(message2); // hello word


// tuple元组类型，类似数组
  // 声明数组变量时可以通过联合类型进行注解，一个数组中存放多个类型的值
  // 但是通过下标获取数据时，调用数据原型上的方法，是编译失败的。但是tuple元组类型可以解决

const list1: (string | number | boolean)[] = ['list1',true,123,44]

// console.log(list1[0].length); 失败



// 使用tuple元组类型进行声明，变量名后跟: 数组对应index的数据类型
const list2: [string,boolean,number,number] = ['list2',true,123,44]
console.log(list2[0].length); // 不会报错


export {}


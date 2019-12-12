// 声明一个装饰器，第三个参数是 "成员的属性描述符"，如果代码输出目标版本(target)小于 ES5 返回值会被忽略。
export function validate(){
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    // 保存原来的方法
    let method = descriptor.value;
    // 重写原来的方法
    descriptor.value = (newValue: string) => {
      // 检查是否是空字符串
      if (!newValue) {
        throw Error('name is invalid')
      } else {
        // 否则调用原来的方法
        method()
      }
    }
  }
}
export function validate2(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    // 保存原来的方法
    let method = descriptor.value;
    // 重写原来的方法
    descriptor.value = (newValue: string) => {
      // 检查是否是空字符串
      if (!newValue) {
        throw Error('name is invalid')
      } else {
        // 否则调用原来的方法
        method()
      }
    }
}
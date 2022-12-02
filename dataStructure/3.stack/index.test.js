/**
 * stack  test script
 * 
 *  */
const Stack = require('./stack');
var assert = require('assert');
let stack = new Stack();
 
stack.push(1)
assert(stack.peek() === 1,'栈顶等于1')
stack.clear();
assert(stack.length() === 0,'length')
try{
    assert(stack.length() !== 0,'测试成功 设置错误参数测试assert')
}catch(e){
    console.log('测试1',e)

}


function mulBase(num,base){
    let s = new Stack();
   do{
       s.push(num % base );
       num = Math.floor(num /= base);
   }while(num >0);
   var converted = "";
   while(s.length()>0){
       converted +=s.pop();
   }
   return converted;
}


   console.log('base',mulBase(10,2))
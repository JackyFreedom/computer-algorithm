/**
 * 栈：
 * 下面通过javasctipt代码模拟了一个叫栈的数据结构
 * 栈的规则是后进先出
 */

function Stack(){
  this.dataStore= [];
  this.top = 0;
  this.push = push;
  this.pop = pop;
  this.peek = peek;
  this.length = length;
  this.clear = clear;
}

function push(ele){
   this.dataStore[this.top++]=ele;
}

function pop(){
  return this.dataStore[--this.top]
};

function peek(){
   return this.dataStore[this.top-1];
}
function clear (){
  this.top = 0;
}
function length(){
  return this.top;
}

module.exports = Stack;
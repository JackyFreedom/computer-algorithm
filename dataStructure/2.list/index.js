/**
 * list 
 * 列表的抽象数据类型定义
 * listSize 属性 列表元素个数
 * pos 属性  列表当前的位置
 * length  属性 返回列表中元素的个数
 * clear 方法 清空列表中的所有元素
 * toString 方法 返回列表的字符串形势
 * getElement 方法 返回当前位置的元素
 * inset 方法 在现有的元素后面插入新的元素
 * append 方法 在末尾插入新的元素
 * remove 方法 从列表中删除元素
 * front 方法 将列表的当前位置移动到第一个元素
 * end 方法 将列表的当前位置移动到最后一个元素 
 * prev 方法 将当前位置后移一位
 * next 方法 将当前位置前移一位
 * currPos 方法 返回列表的当前位置
 * moveTo 方法 将当前的位置移动到指定的位置 
 * 
 */
function List (){
  this.listSize = 0;
  this.pos = 0;
  this.dataStore = [];//初始化一个空数组来保存列表中的元素
  this.clear = clear;
  this.find  = find;
  this.append = append;
  this.remove = remove;
  this.front = front;
  this.end = end;
  this.prev = prev;
  this.next = next;
  this.length = length;
  this.currPos = currPos;
  this.moveTo = moveTo;
  this.getElement = getElement;
  this.insert  = insert;
  this.contains = contains;
}

//给列表添加元素 
function append(element){
  this.dataStore[this.listSize++] = element;
}
//在列表中查找某一元素 
function find(element){
  for(let i= 0 ; i<this.dataStore.length; i++){
      if(this.dataStore[i] == element){
          return i;
      }
  }
   return -1
}
//从列表中删除元素 
function  remove(element){
  let foundAt = this.find(element);
  if(foundAt > -1){
      this.dataStore.splice(foundAt,1);
      --this.listSize;
      return true;
  }
  return false;
}
//length 列表中有多少个元素
function length(){
  return this.listSize;
}
//显示列表中的元素 
function toString(){
  return this.dataStore;
}

//向列表中插入一个元素
function insert(element,after){
  let insertPos = this.find(after);
  if(insertPos > -1){
      this.dataStore.splice(insertPos+1,0,element);
      ++this.listSize;
      return true;
  }
  return  false;
}

//清除整个数组 
function clear (){
  this.dataStore = [];
  this.listSize = this.pos = 0;
}

//判断给定值是否在列表中
function contains (element){
  for(var i = 0;i<this.dataStore.length;++i){
      if(this.dataStore[i] == element){
          return true;
      }
  }
  return  false;
}
//迭代器
//设置迭代器在开始位置
function front(){
  this.pos = 0;
}
//设置迭代器在结束位置
function end(){
  this.pos  = this.listSize -1;
}
//设置迭代器向前迭代一个位置
function prev(){
  if(this.pos>0){
      --this.pos;
  }
}
//设置迭代器向后迭代一个位置
function next(){
  if(this.pos<this.listSize -1){
      ++this.pos;
  }
}
//获取当前迭代器的位置
function currPos(){
  return this.pos;
}
//设置迭代器当前的位置
function moveTo(position){
  this.pos= position;
}
//获取迭代其当前位置的元素
function getElement(){
  return this.dataStore[this.pos];
}
module.exports = List;
const assert = require('assert');
const List = require('./index');

let list = new List();
list.append(1)
list.append(12)
list.append(123);
 


//增删查测试
assert(list.listSize===3 ,'列表长度为3');
assert(list.find(12) !==-1,'查询成功返回大于负1的值');
assert(list.remove(12) === true , '删除成功 返回true')
assert(list.contains(123) === true , 'contains 返回true')
try{
    assert(list.find(12) !==-1 , '测试成功 设置错误的参数测试assert')
}catch(e){
    console.log('测试1',e)
}


//迭代器测试 
list.front();
assert(list.currPos() === 0,'当前迭代器的位置为开始')
assert(list.getElement() === 1,'开始位置的元素')
list.end();
assert(list.currPos() === 1,'迭代器的最后一个位置')
assert(list.getElement()===123,'迭代器最后一个位置的元素')
list.moveTo(0)
assert(list.currPos() === 0,'设置当前迭代器的位置')
assert(list.getElement() === 1,'设置后的迭代器位置的元素')
assert(list.insert('insert',1) === true,'插入成功返回true')
list.front();list.next();
assert(list.pos === 1,'next')
list.prev();
assert(list.pos === 0,'prev')


try{
    assert(list.getElement() !== 1,'迭代测试成功 设置错误参数测试assert')
}catch(e){
    console.log('测试2',e)
}


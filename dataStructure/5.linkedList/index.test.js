/**
 * linked test script
 * 测试以下方法
 * append
 * removeAt
 * insert
 * remove
 * inedxOf
 * iseMpty
 * size
 * toString
 * print
 * 
 */
var assert = require('assert');
var {LinkedList,DoublyLinkedList} = require('./linked');

// var linkedList = new LinkedList();

// linkedList.append('one');

// assert(linkedList.indexOf('one') === 0,'indexof 返回当前的位置0 ')
// assert(linkedList.removeAt(0) !== false,'删除成功后返回删除的元素')

// linkedList.insert(0,'two')
// linkedList.print()

// assert(linkedList.isEmpty() === false,'当前head不等于空')
// assert(linkedList.remove('two') !== false,'删除成功返回删除的值')
// assert(linkedList.size() === 0,'当前的长度等于1')
// print()


//测试doublyLinkList
var  doubly = new DoublyLinkedList();

doubly.append('one');

assert(doubly.size() === 1,'添加一个后当前的zise等于1');

doubly.insert(0,'two')
doubly.print();

assert(doubly.indexOf('two') === 0 ,'two被插入到头部去了 查询的时候应该返回0')

assert(doubly.removeAt(0) === 'two', '通过索引查找返回当前删除的元素 ')

assert(doubly.remove('one') === 'one','通过元素查找删除元素')

assert(doubly.isEmpty() === true , '当前链表为空返回true')

doubly.print();
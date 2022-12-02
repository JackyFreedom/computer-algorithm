/**
 * hashTable test script
 */

var assert = require('assert');
var {HashTable,HashLink,HashDetaction} = require('./hashTable');

// var table = new HashTable();

// table.put('key','hello world1')
// table.put('key1','hello world')
// table.put('Tyrion','hello world11')
// table.put('Aaron','hello world222')
// table.print()

//解决hash碰撞方法之一 分离链接

// var link = new HashLink();

// link.put('add','addvalue')
// link.put('add','addvalue1')
// link.put('two','chengjad')
// link.remove('add')
// link.print()
// console.log('get',link.get('two'))

//解决hash碰撞方法之一 线性探测
var detect = new HashDetaction();

detect.put('one','onedate')
detect.put('two','twodate')
detect.put('three','threedate')
detect.put('three','threedate2')

detect.remove('two')
detect.print()
console.log(detect.get('three'))

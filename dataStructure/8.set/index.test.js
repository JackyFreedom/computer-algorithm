/**
 * Set test script
 */
var assert = require('assert');
var {Set} = require('./set');

var set = new Set();

assert(set.add('one') === true,'添加成功返回true');
assert(set.size() === 1,'当前长度为1');
assert(set.has('one') === true,'判断是否有当前属性');
assert(set.remove('one') === true,'删除成功返回true');
assert(set.add('one') === true,'添加成功返回true');
assert(set.add('one') === false,'已有one 添加失败返回false');
set.clear()
assert(set.size() === 0 ,'clear 清空了set ');

//并集
// var union2 = new Set()
// union2.add(11)
// union2.add(22)
// var union1 = new Set();
// union1.add(44)
// var union =  union2.union(union1)
// union.print()

//交集
// var union2 = new Set()
// union2.add(11)
// union2.add(22)
// union2.add(44)
// var union1 = new Set();
// union1.add(44)
// union1.add(44)
// var union =  union2.intersection(union1)
// union.print()

//差集
// var union2 = new Set()
// union2.add(11)
// union2.add(22)
// union2.add(44)
// var union1 = new Set();
// union1.add(44)
// union1.add(44)
// var union =  union2.difference(union1)
// union.print()

//子集
var union2 = new Set()
union2.add(11)
union2.add(22)
union2.add(44)
var union1 = new Set();
union1.add(44)
union1.add(44)
assert( union2.subSet(union1) === false,'union2 不是union1的子集')
assert( union1.subSet(union2) === true,'union1 是union2的子集')



/**
 * dictionary test script
 * 
 */
var assert = require('assert')
var Dictionary = require('./dictionary')

var dic= new Dictionary();

dic.set('wang','jacky');

assert(dic.get('wang') === 'jacky','get后返回当前建的值 jacky')

assert(dic.size() === 1,'当前长度为1')
assert(dic.remove('wang') === true,'删除成功后返回true')
assert(dic.get('get') === undefined ,'找不到这个key返回undefined')
// dic.print()
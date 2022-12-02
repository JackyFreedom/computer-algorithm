/**
 * queue test script
 */
var assert = require('assert');
var  {Queue,PriorityQueue,hotPotato} = require('./queue');

var queue = new Queue();

assert(queue.isEmpty() ===  true,'初始化 队列为空')

queue.enqueue('one');
queue.enqueue('two');

assert(queue.size() === 2,'enqueue 后队列长度为2')
assert(queue.front() === 'one','第一个元素为one');
assert(queue.dequeue() === 'one','删除后返回删除的元素 one')
queue.print();

var priorityQueue = new PriorityQueue();
priorityQueue.enqueue('ONE',2);
priorityQueue.enqueue('two',1);
priorityQueue.enqueue('THREE',3);
console.log('---',priorityQueue.print())

assert(priorityQueue.dequeue() === 'two','队列的第一个元素是two')
assert(priorityQueue.size() === 2 , 'priorityqueue size等于2')
assert(priorityQueue.front() === "ONE",'第一个等于ONE')
assert(priorityQueue.isEmpty() === false, '列表曾在元素false')


//击鼓传花
var list = [1,2,3,4,5,6,7]
console.log('hotpotato',hotPotato(list,3))
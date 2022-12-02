/**
 * queue
 * 队列遵循先进先出
 * 下面是实现的方法
 * enqueue 向尾部添加一个元素
 * dequeue 移除队列的第一个元素，并返回
 * front 返回队列中的第一个元素，对队列不做任何操作
 * isEmpty 队列为空返回true，否则返回false
 * size 返回队列的长度
 * print 把栈里的元素转换成字符串在控制台打印出来
 * 
 */
function Queue() {
  var items = [];
  this.enqueue = function (ele) {
      items.push(ele);
  }
  this.dequeue = function () {
      return items.shift();
  }
  this.front = function () {
      return items[0];
  }
  this.isEmpty = function () {
      return items.length === 0;
  }
  this.size = function () {
      return items.length;
  }
  this.print = function () {
      console.log(items.toString());
  }
}

//优先队列
function PriorityQueue() {
  var items = [];
  function QueueElement(element, priorty) {
      this.element = element;
      this.priorty = priorty;
  }
  this.enqueue = function (element, priorty) {
      var queueElement = new QueueElement(element, priorty);

      if (this.isEmpty()) {
          items.push(queueElement);
      } else {
          var added = false;
          for (var i = 0; i < items.length; i++) {
              if (queueElement.priorty < items[i].priorty) {
                  items.splice(i, 0, queueElement);
                  added = true;
                  break;
              }
          }
          if (!added) {
              items.push(queueElement);
          }
      }
  }
  this.isEmpty = function () {
      return items.length === 0;
  }
  this.dequeue = function () {
      var item = items.shift();
      return item.element;
  }
  this.front = function () {
      var item = items[0];
      return item.element;
  }
  this.print = function () {
      let str = items.map(function (val) {
          return val.element;
      }).toString();
      console.log(str)
  }
  this.size = function () {
      return items.length;
  }

}

//循环队列 -- 击鼓传花
function hotPotato(nameList,num){
  var queue = new Queue();
  for(var i = 0;i<nameList.length;i++){
      queue.enqueue(nameList[i]);
  }
  var eliminated = '';
  while (queue.size() > 1){
      for(var i=0; i<num ; i++){
          queue.enqueue(queue.dequeue());
      }
      eliminated = queue.dequeue();
      console.log(eliminated + '在击鼓传花中的游戏失败了')
  }
  return queue.dequeue();
}
module.exports = {
  Queue,
  PriorityQueue,
  hotPotato
}
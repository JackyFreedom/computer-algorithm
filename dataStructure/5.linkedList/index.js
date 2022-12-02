/**
 * linked 
 * 在大多数的语言中数组大小是固定的，从数组的起点或中间插入或移除项的成本很高，因为
 * 要移动元素，尽管我们的javascript的array类方法可以帮我们做这些事，但背后的情况同样是这样的。
 * 
 * 链表储层有序元素集合，但不同于数组， 链表中的元素在内存中并不是连续放置的，每个元素由一个存储元素本身
 * 和一个指向下一个元素的引用组成。
 * 根据以上的要求我们实现一个链表
 */

function linkedList(){
  var Node = function(element){
      this.element= element;
      this.next = null;
  };
  var length = 0;
  var head = null;

  this.append = function(element){
      var node = new Node(element);
      var current ;
      if(head === null){
          head = node ;
      }else{
          current = head;
          while(current.next){
              current = current.next()
          }
          current.next = node;
      }
      length++;
  };
  this.removeAt = function(position){
     if(position>=0&&position<length){
     var current = head;
     var previous ;
         if(position === 0){
             head =current.next;
         }else{
             while(current++ < position){
              previous = current;
              current = current.next;    
             }
             previous.next = current.next;
         }
         length -- ;
         return current.element;            
      }else{
          return false;
      }
  }
  
  this.insert = function(position,element){
     position = position || length;
     if(position >=0 && position<=length){
         var node = new Node(element)
         var index = 0;
         if(position === 0){
            node.next= head
            head = node;
         }else{
             var previous;
              var current = head;
             while(index++ <position){
                 previous = current
                 current = current.next
             }
             previous.next = node;
             node.next = current;
         }
         length++;
         return true;
     }else{
         return false
     }

  };

  this.remove = function(element){
      let index = this.indexOf(element);
     //  console.log('index',index)
      return this.removeAt(index);
  };
  this.indexOf = function(element){
     var current = head;

     var index = 0;
     if(current.element === element){
         return index;
     }else{
         while(current.next){
             index ++;
             if(current.next.element === element){
               return index;
             }else{
                 current = current.next; 
             }

         }
     }
     return -1;
  };
  this.isEmpty = function(){
      return head?false:true;
  };
  this.size = function(){
      var current = head;
      var size = 0;
      while(current){
         current = current.next;
          size ++;
      }
  };
  this.toString = function(){
      var current = head;
      var eles = [];
      while(current){
         eles.push(current.element);
          current = current.next;
      };
      return eles.join();
  };
  this.print = function(){
      console.log(this.toString());
  }
  this.getHead = function(){
      return head;
  }
}

//双向链表 -- 优点有 如果要查找的元素解决尾部我们可以从后向前遍历
function DoublyLinkedList(){
  var Node = function(element){
      this.element = element;
      this.prev = null;
      this.next = null;
  };
  var head = null;
  var tail = null;
  var length = 0;
  this.append = function(element){

     var node = new Node(element);
      if(length === 0){
          head = node;
      }else{
         var current = head ;
         while(current.next){
             prev = current;
             current = current.next;
         }
         current.next = node;
         node.prev = current

      }
      length ++;
  }
  this.insert = function(position,element){
     if(position>=0&&position<=length){
         var node = new Node(element),
             current = head,
             previous,
             index = 0;    
             //头部          
         if(position === 0){
             if(!head){
                 head = node;
                 tail = node;
             }else{
                 node.next= current;
                 current.prev = node;
                 head = node ;
             }
             //尾部
         }else if(position === length){
              current = tail;
              current.next = node;
              node.prev = current;
              tail = node ;
         }else{
             while(index++ <position){
                 previous = current;
                 current = current.next;
             }
             node.next = current;
             node.prev = previous;
             current.prev = node;
             previous.next = node;

         }
         length++;
     }else{
         return false;
     }
  }
  this.removeAt = function(position){
      if(position>=0&&position<length){
          var current = head;
         if(position === 0){
            head = current.next;
            if(length === 1){
            tail = null;          
            }else{
             head.prev = null;
            }
         }else if(position === length-1 ){
               tail = tail.prev;
               tail.next = null;  
         }else{
             var index= 0;
            while(index++ <position){
                previous = current;
                current = current.next;
                
            }
            previous.next = current.next;
            current.next.prev = previous;
         }
        length --;
        return current.element;
     }else{
      return null
  }

}

this.indexOf = function(element){
    var current = head,index=0;

    while(current){
        if(current.element === element){
           return index;
        }else{
            index++
            current = current.next;
        }

     }
     return -1;
}

this.remove = function(element){
    var index = this.indexOf(element);
    return  this.removeAt(index);
}
this.size = function(){
    return length;
}
this.isEmpty = function(){
    return length === 0;
}
this.getHead = function(){
    return head;
}
this.toString = function(){

    var arr  = [],current = head;
    while(current ){
        arr.push(current.element);
        current = current.next;
    }
    return  arr.join();
}
this.print = function(){
    console.log(this.toString());
}

}
module.exports = {
 linkedList,  
 DoublyLinkedList
};
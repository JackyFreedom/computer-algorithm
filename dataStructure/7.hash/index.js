/**
 * hashTable
 * 通过hash做key来储存数据
 * 
 */
var { linkedList} = require('../newarray/linked')
 function HashTable(){
    var  table = [];

    this.loseloseHashCode = function(key){
        var hash = 0;
        for(var i=0;i<key.length;i++){
          hash += key.charCodeAt(i);
        }
        return  hash%37;
    }

    this.put = function(key,value){
    var position = this.loseloseHashCode(key);
     table[position] = value
    }
    this.get = function(key){
        return table[this.loseloseHashCode(key)];
    }
    this.remove = function(key){
        table[this.loseloseHashCode(key)] = undefined;
    }
    this.print = function(){
        for(var i =0 ; i<table.length;i++){
            if(table[i] !== undefined){
                console.log(i+':'+table[i])
            }
        }
    }
 }

 //解决哈希碰撞方法一 分离链接

function HashLink(){
    var table = [];

    var ValuePair = function(key,value){
        this.key = key;
        this.value = value;

        this.toString = function(){
            return '['+this.key+'-'+this.value+']';
        }
    }
    var  loseloseHashCode = function(key){
           var hash = 0;
           for(var i =0; i<key.length;i++){
               hash+=key.charCodeAt(i);
           }
           return hash%37;
     }

    this.put =function(key,value){
        var position = loseloseHashCode(key);

        if(table[position] === undefined){
            table[position] = new linkedList()
        }
        table[position].append(new ValuePair(key, value));
    }
    this.get = function(key){
        var position = loseloseHashCode(key);
          
        if(table[position] !== undefined){
            var current = table[position].getHead();
            while(current.next){
                if(current.element.key === key){
                    return current.element.value
                }
                current = current.next;

            }
            if(current.element.key === key){
                return current.element.value;
            }
        }
        return undefined;
        //错误的 当时没意识到取出来的是一个对象 要取出来的是head的指针
        // if(table[position]){
        //      var current = table[position];
        //      while(current){
        //          if(current.element.key === key){
        //              return current.element.value;
        //          }else{
        //              current = current.next;
        //          }
        //      }
        //      throw Error('get ',key ,'is not defined')
        // }else{
        //     return undefined
        // }
    }
    this.remove = function(key){
        var position = loseloseHashCode(key);
        if(table[position] !==undefined){
            var current =  table[position].getHead();
            while(current.next){
                if(current.element.key === key){
                    table[position].remove(current.element);
                    if(table[position].isEmpty()){
                        table[position] = undefined;
                    }
                    return true;
                }
                current = current.next;
            }
            if(current.element.key === key){
                table[position].remove(current.element);
                if(table[position].isEmpty()){
                    table[position] = undefined;
                }
                return true;
            }
        }
        return false;
        //错误的 当时没考虑到取出来的是一个实例对象 想要取到应该head指针
        // if(table[position]){
        //     var current = table[position];
        //     var index =0;
        //     var previous;
           
        //     while(current){
        //         console.log(current.toString())
        //         if(current.element.key ===key){
        //             if(index===0){
        //                 table[position] = current.next ?current.next :undefined;
        //             }else{
                                   
        //                 previous.next = current.next; 
        //             }
        //             return true;
        //         } 
        //            previous = current; 
        //            current =   current.next 
        //     }
        // }
        // return false;
    }
    this.print = function(){
        var values = []
        for(var i =0 ; i<table.length;i++){
            if(table[i] !== undefined){
                var current = table[i];
        console.log('table',current.toString())

                while(current){
                  var ele =   current.element
                   values.push(ele);
                   current = current.next;
                }

             
            }
        }
        console.log(values.join())
    }
    
}
 

// 线性探测 

function HashDetaction(){
    var table = [];
    
    var ValuePair = function(key,value){
        this.key = key;
        this.value = value;

        this.toString = function(){
            return '['+this.key+'-'+this.value+']';
        }
    }
    var  loseloseHashCode = function(key){
        var  hash = 0;
        for(var i = 0; i<key.length;i++){
             hash += key.charCodeAt(i);
        }
        return hash%37;
    }
    //i 
    // this.put = function(key,value){
    //   var position  = loseloseHashCode(key);
    //    var index= 0;
    //   if(table[position]){
    //       while(table[position+ ++index]){
    //               if(!table[position+index]){
    //                 table[position+index] = new ValuePair(key,value); 
    //               }
    //       }
    //    }else{
    //       table[position] = new ValuePair(key,value);
    //   }
    // }
    this.put = function(key,value){
        var position = loseloseHashCode(key);

        if(table[position] == undefined){
            table[position] = new ValuePair(key,value);

        }else{
            var  index = ++position;
            while(table[index] != undefined){
                index ++;
            }
            table[index] = new ValuePair(key,value);
        }
    }
 
    this.get = function(key){
        var position = loseloseHashCode(key);

        if(table[position] != undefined){
            if(table[position].key === key){
                return table[position].value;

            }else{
                var index = ++position;
                while(table[index] === undefined || table[index].key !==key){
                    index ++;
                }
                if(table[index].key === key){
                    return table[index].value;
                }
            }
        }
        return undefined
    }
    this.remove =  function(key){
        var  position = loseloseHashCode(key);

        if(table[position] !== undefined){
            if(table[position].key == key){
                table[position] = undefined;
                return true;
            }else{
                var index = ++position;
                while(table[index] ==undefined || table[index].key !==key){
                    index ++;
                }
                if(table[index].key === key){
                 table[index] = undefined;
                 return true;
                }
            }
        }
        return false;
    }
    this.print = function(){
       var toArray = [];
       for(var i = 0; i <table.length;i++){
            if(table[i]){
            toArray.push(`${i}-${table[i].key}-${table[i].value}`)
            }
       }
       console.log(toArray)
    }
}

//更好的散列函数
var djdwHashCode = function(key){
    var hash = 5381;
    for(var i =0 ; i<key.length;i++){
        hahs= hash* 33 + key.charCodeAt(i);
        return hash % 1013;
    }
}
 module.exports = {HashTable,HashDetaction,HashLink};
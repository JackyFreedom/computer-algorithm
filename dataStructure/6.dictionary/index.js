/**
 * dictionary
 * 字典 无序集合 遵循 键值对的形式
 * 
 * 实现的方法
 * set 
 * remove
 * get
 * clear
 * size
 * keys
 * values
 */

function Dictionary(){
    var items = {};

    this.set = function(key,value){
      items[key] = value;
    }
    this.has = function(key){
        return  items.hasOwnProperty(key);
    }
    this.clear = function(){
        items = {}
    }
    this.get = function(key){
        if(this.has(key)){
           return  items[key] 
        }else{
            return  undefined;
        }
    }
    this.keys = function(){
        var keys = [];
        for(var prop in  items){
            if(this.has(prop)){
               keys.push(prop)
            }
        }
       return keys; 
    }
    this.values = function(){
        var values = [];
        for(var prop in items ){
            if(this.has(prop)){
                values.push(item[prop]);
            }
        }
        return values ;
    }
    this.size = function (){
        return  this.keys().length ;
    }
    this.remove =function(key){
        if(this.has(key)){
            delete items[key];
            return true;
        }
        return false;
    }
   }

   module.exports = Dictionary;
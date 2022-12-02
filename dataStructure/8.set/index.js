/**
 * set 集合 
 * 
 * 集合遵循唯一性 无序
 * add
 * remove
 * has
 * values
 * size
 * clear
 * 
 * union
 * intersection
 * defference
 * subset
 * 
 */

function Set(){
  var items ={}
  
  this.has = function(value){
      return items.hasOwnProperty(value);
  }
  this.add =function(value) {
     if(!this.has(value)){
         items[value] = value;
         return true;
     }
     return false
  }
  this.remove = function(value){
      if(this.has(value)){
          delete items[value];
          return true;
      }
      return false;
  }
  this.size = function(){
    return this.values().length;
  }
  this.values = function(){
      var keys = [];
      for(var prop in items){
          if(this.has(prop)){
              keys.push(prop);
          }
      }
      return keys;
  }
  this.clear = function(){
      items = {};
  }
  this.print = function(){
      console.log(items);
  }
 //并集 --  对于给定的两个集合返回一个包含两个集合中使用元素的新集合
 this.union = function(otherSet){
   var unionSet = new Set();
   var values = this.values();
   for(var i =0 ; i<values.length;i++){
        unionSet.add(values[i]);
   }
    values = otherSet.values(); 
   for(var i =0; i<values.length;i++){
       unionSet.add(values[i])
   }

   return unionSet;
 }
   
  //交集 -- 对于给定的两个集合， 返回两个集合共有的元素的新集合
  this.intersection = function(otherSet){
     var  intersection = new Set()
     var  values = this.values();
     for(var i=0;i<values.length;i++){
          if( otherSet.has(values[i])){
              intersection.add(values[i])
           }
     }
     return intersection;
 }
 //差集 -- 对于给定的两个集合， 返回一个集合他包含存在第一个集合里的每一个元素 并且元素不存在第二个集合里
 this.difference = function (otherSet){
     var values = this.values();
     var difference = new Set();
     
     for(var i =0; i<values.length;i++){
         if(!otherSet.has(values[i])){
            difference.add(values[i])
         }
     }
     return difference;
 
 }
 //子集 --  对于给定的两个集合 ，返回boolean 判断一个集合是否包含另一个集合
 this.subSet = function(otherSet){
     var values = this.values();
     for(var i =0; i <values.length;i++){
         if(!otherSet.has(values[i])){
             return false;
         }
     }
     return true;
 }
}



module.exports = {
  Set
}
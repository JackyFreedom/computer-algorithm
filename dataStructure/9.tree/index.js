 /**
  * tree 
  * 二叉树数据结构 
  * 规则 最上面的为根节点，每个节点有左右两个子节点 ，这些定义有助于我们写出更高效的向从树中插入，查找删除节点的算法。
  * 二叉搜索树 （BST） 是二叉树的一种， 但是她只允许你在左侧节点储层比父节点小的值在右侧储层比父节点大或等于父节点的值
  * 实现的方法 
  *  insert
  *  search
  *  inOrderTraverse 通过中序方式 遍历所有的节点
  *  preOrderTraverse 通过先序的方式遍历所有的节点
  *  prstOrderTraverse 通过后续遍历的方式遍历所有的节点
  *  min 返回数中最新的值
  *  max 返回树中最大的值
  *   remove 从树中删除某个键
  */

 function BinarySearchTree(){
  var Node = function(key){
      this.key = key;
      this.left = null;
      this.right = null;
  }
  //中序遍历的方法
  var inOrderTraverseNode =function(node,callback){
      if(node !== null){
          inOrderTraverseNode(node.left,callback);
          callback(node.key);
          inOrderTraverseNode(node.right,callback);
      }
  }
  //先序遍历
  var preOrderTraverseNode = function(node,callback){
      if(node !== null){
          callback(node.key);
          preOrderTraverseNode(node.left,callback);
          preOrderTraverseNode(node.right,callback);
      }
  }
  //后续遍历
  var postOrderTraverseNode = function(node ,callback){
      if(node !== null){
          postOrderTraverseNode(node.left,callback);
          postOrderTraverseNode(node.right,callback);
          callback(node.key);
      }
  }
  //最大和最新查询 
  var size = function(node,size){
      if(node){
          while(node && node[size] !== null){
              node = node[size];
          }
          return node.key;
      }
      return null;
  }
  //查询当前树中存在这个值返回true 否则返回false
  var searchNode = function(key,node){
      if(node === null){
          return false;
      }
      if(key < node.key){
         return searchNode(key,node.left)

      }else if(key > node.key){
          return searchNode(key,node.right)
      }else{
          return true;
      }
  }
  
  var removeNode = function(node,key){
      console.log('key',key)
      debugger
      if(node === null){
          return null;
      }
      if(key < node.key){
          node.left = removeNode(node.left,key);
          return node;
      }else if(key > node.key){
          node.right = removeNode(node.right,key);
          return node;
      }else{
         //第一种清空 只有一个叶节点  
        if(node.left === null && node.right === null){
              node = null;
              return node;
          }
          //第二种情况 只有一个子节点的节点
          if(node.left === null){
              node = node.right;
              return node;
          }else if(node.right === null){
              node = node.left;
              return node;
          }
          //第三种情况 有两个子节点的节点
          var aux = size(node.right,'left');
          console.log('aux',aux)
          node.key =  aux;
          node.right = removeNode(node.right,aux);
          return node;

      }
  }
  var root = null;
  var insertNode = function(node,newNode){
       if(newNode.key < node.key){
            if(node.left === null){
                node.left = newNode;
            }else{
                insertNode(node.left,newNode);
            }
       }else{
           if(node.right === null){
               node.right =  newNode;
           }else{
               insertNode(node.right,newNode);
           }
       }
  }
  this.insert = function(key){
      var newNode = new Node(key);
      if(root === null){
          root = newNode;
      }else{
          insertNode(root,newNode);
      }
  }
  //中序遍历 

  this.inOrderTraverse = function(callback){
      inOrderTraverseNode(root,callback);
  }
  //先序遍历 
  this.preOrderTraverse = function(callback){
      preOrderTraverseNode(root,callback)
  }
  //后序遍历
  this.postOrderTraverse = function(callback){
      postOrderTraverseNode(root,callback)
  }
  this.min = function(){
      return size(root,'left');
  }
  this.max = function(){
    return size(root,'right');
}
  this.search = function(key){
    return  searchNode(key,root);
  }
  this.remove  = function(key){
      root = removeNode(root,key);
  }
}

module.exports = {
BinarySearchTree
}
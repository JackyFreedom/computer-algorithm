/**
 * 排序算法
 */
var index = 0;
function ArrayList(){
    var array = [];
    this.insert = function(item){
        array.push(item);
    }
    this.toString = function(){
        console.log('index',index);
        index = 0;
        return array.join();
    }
    //冒泡排序
    var swap = function(index1,index2){
        var aux = array[index1];
        array[index1] = array[index2];
        array[index2] = aux;
    }
    this.bubbleSort = function(){
        var length = array.length;
        for(var i=0; i<length; i++){
            for(var j=0; j<length - 1;j++){
                  index++;

                if (array[j] > array[j+1]){
                    swap(j,j+1);
                }
            }
        }
    }
    //改进后的冒泡排序
    this.modifieBubbleSortX = function(){
        var length = array.length;
        for(var i=0;i<length;i++){
            for(var j = 0; j<length-1-i;j++){
               index++;
                if(array[j] > array[j+1]){
                    swap(j,j+1);
                }
            }
        }
    }
    //选择排序 
    this.selectionSort = function(){
        var  length  = array.length,
             indexMin;
             for(var i=0;i<length-1;i++){
                 indexMin = i;
                 for(var j=i; j<length;j++){
                     index++
                     console.log(indexMin,'indexMin',j)
                     if(array[indexMin] > array[j]){
                         indexMin = j;
                     }
                 }
                 if(i !== indexMin){
                     swap(i,indexMin)
                 }
             }
    }

    //插入排序
    //从下标1开始遍历，每轮循环向后查找，把当前的值插入大于他和小于他直接
    this.insertionSort = function(){
        var length = array.length,
             j,temp;
        for(var i=1;i<length;i++){
            j=i;
            temp = array[i];
            while(j>0 && array[j-1] > temp){
                array[j] = array[j-1];
                j--;
            }
            array[j] = temp;
        }
    }
    //归并排序
    //总结：归并排序采用分治法 ，通过递归mergeSortRec把数组分割成最小到长度单位1 并且递归的结束条件是长度等于1 ，
    //merge 函数进行排序计算  
    var merge = function(left,right){  
        console.log(left,'merge',right)
        var result = [],
        il = 0,
        ir = 0;
        //左右的数组长度大0
        console.log(left[il] < right[ir])

        while(il < left.length && ir < right.length){
            if(left[il] < right[ir]){
                result.push(left[il++]);
            }else{ 
                result.push(right[ir++]);
            }
        }
        //左边的数组长度大于0
        while(il < left.length){
            result.push(left[il++]);
        }
        //右边的数组长度大于0
        while(ir < right.length){
            result.push(right[ir++]);
        } 
        console.log('result',result)
        return result
    }
    var mergeSortRec = function(array){ 
        console.log('mergeSortRec',array)
        var length = array.length;
        if(length === 1){
            return array;
        }
        var mid = Math.floor(length / 2),
            left = array.slice(0,mid),
            right = array.slice(mid,length);
            
        return merge(mergeSortRec(left),mergeSortRec(right));
    }
    this.mergeSort = function(){
        array = mergeSortRec(array);
    }
    //快速排序

    var swapQuickStort = function(array,index1,index2){
        console.log(array,index1,index2)

        var aux = array[index1];
        array[index1] =  array[index2];
        array[index2] = aux;
    }
    //划分过程
    var partition = function(array,left,right){
        console.log('partition',array,left,right)
        var pivot = array[Math.floor((right + left) / 2)],
            i = left,
            j = right;

            while(i <=j ){
                while(array[i] < pivot){
                    i++;
                }
                while(array[j] > pivot){
                    j--;
                }
                if(i <= j){
                    swapQuickStort(array,i,j);
                    i++;
                    j--;
                }
            }
            return i;
    }

    var quick = function(array,left,right){
        console.log('quick',array,left,right)

        var index;
        if(array.length > 1){
            index =  partition(array,left, right);

            if(left < index -1){
                quick(array,left,index -1);
            }

            if(index < right){
                quick(array ,index ,right);
            }
        }
    }
    
    this.quickSort = function(){
        quick(array,0,array.length -1);
    }

    //顺序搜索
    this.sequentialSearch = function(item){
        for(var i = 0; i<array.length;i++){
            if(item === array[i]){
                return i ;
            }
        }
        return -1;
    }
    //二分搜索  ： 这个算法要求被搜索的数据结构已排序
    this.binarySearch = function(item){
        this.mergeSort();
        
        var low = 0,
            high = array.length -1 ,
            mid , element;
        while(low <= high){
            console.log(low,'low0----',high)
            mid = Math.floor((low + high)/2);
            element = array[mid];
            if(element < item){
                low = mid - 1;
            }else if(element > item){
                high = mid - 1;
            }else{
                return mid;
            }
        }
    }
    
    this.partSearch = function(item){
        this.mergeSort();
        
        let  start= 0,end=array.length-1;
        //初始化变量等于数组的开始下标 和结束下标 通过取数组中的中间数值 ， 判断当前的要查找的值是否等于这个值 ， 如果是的返回当前下标
        // 如果小于这个值 移动结束变量等于当前下标  ，继续以上步骤  。 如果大于这个值 取开始下标等于这个值 ，继续以上步骤 ；
            while(start < end){
                // console.log(start,'----',end)
            let mid  = Math.floor((start +end) / 2 );
            // console.log(item,'item',array[mid])
                if(item < array[mid]){
                    end = mid;
                }else if (item > array[mid]){
                    start = mid;
                }else{
                    return mid;
                }
                // console.log(start,'end----',end)

            }
        //当他遍历完数组后没找到相同的值 返回 -1
            return -1;
         }  
}

//动态规划
function MinCoinChange(coins){
    var coins = coins;
    var cache = {};

    this.makeChange = function(amount){
        var me = this;
        if(!amount){
            return [];
        }
        if(cache[amount]){
            return cache[amount];
        }
        var min = [],newMin, newAmout;
        for(var i = 0; i <coins.length;i++){
            var coin = coins[i];
            newAmout = amount - coin;
            if(newAmout >=0 ){
                newMin = me.makeChange(newAmout);
            }
            if(
                newAmout >= 0 &&
                (newMin.length < min.length -1 || !min.length)
                && (newMin.length || !newAmout) 
            ){
                min = [coin].concat(newMin);
                console.log('new Min'+min+'for '+amount);
            }
        }
        return (cache[amount] = min);
    }

    //贪心算法
    this.makeChange1 = function(amount){
        var change = [],
             total = 0;
             for(var i = coins.length; i>=0; i--){
                 var coin = coins[i];
                 while(total + coin <= amount){
                     change.push(coin);
                 }
             }
        return change;
    }
}

module.exports = {ArrayList};
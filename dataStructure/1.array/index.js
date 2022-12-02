/**
 * 数组：
 *  描述：
 *    1.js内置对象，提供了一下增删改查操作
 *  api:
 *    1.some() //比较的值有一个是true则返回true
 *    2.every() //比较的值有一个是false则会返回false 
 *    3.push()  //在数组最后添加一个元素
 *    4.shift()  //在数组最后删除一个元素
 *    5.unshift() //在数组最前面添加一个元素
 *    6.reduce()  //保留上一个处理的值迭代循环
 *    7.join()  //将数组分割成字符串
 *    8.splice() //删除，插入
 *    9.concat() //数组合并
 *    10.reverse() //倒序
 *   题：
 *    1.创建一个记录学生成绩的对象提供一个添加成绩和，显示平均成绩的方法
 *    2.将一组单词存在数组，并按正序和倒序显示这单词
 *    3.创建一个对象，它可以通过二维数组存储某月有用数据，增加一些方法显示当月的平均数，某周平均数和所有周平均数
 *    4.创建一个对象，他将字母储存在一个数组中，用一个方法将所有的字母连接成一个单词显示出来
 */
/** -------------------------- 解 start-------------------------- */
//  1.
exports.studentScore = {
  scoreList: [],
  add: function (val) {
    this.scoreList.push(val)
  },
  showAverage:function () {
    let average = this.scoreList.reduce((left,right)=>left+right,0) / this.scoreList.length
    console.log('学生的平均成绩是：', average);
    return average
  }
} 
//  2.
exports.wordList = {
  list: [],
  add:function (val) {
    this.list.push(val)
  },
  showLeft: function () {
    let val = this.list.join('')
    console.log('正序：',val);
     return  val
  },
  showRight: function () {
    let val  = this.list.reverse().join('')
    console.log('倒序：', val);
    return val
  }
}
//  3.
exports.monthData = {
  list: [],
  add:function (list) {
     this.list.push(list)
  },
  //某月 ，某周 ，默认所有月
  _reduceList:function (list) {
    return  list.reduce((left, right) => {
        if (Array.isArray(right)) {
         return left + this._reduceList(right)
        } else {
          return left + right
        }
      },0 )
    },
  showAverage:function(monthNum, weekNum) {
    if (monthNum && weekNum) {
      let week = this.list[monthNum][weekNum]
      let val =this._reduceList(week) / week.length
      console.log(`${monthNum}月 - ${weekNum}周 - 平均数：`,val);
      return val
    } else if (monthNum) {
      let month = this.list[monthNum] 
      let val =  this._reduceList(month) / month.length
      console.log(`${monthNum}月 - 平均数：`,val);
      
      return val
    } else {
   let val =   this._reduceList(this.list) / this.list.length
      console.log('所有月份平均数：', val);
      return val
    }
  }
  
}

// 4.
exports.letter = {
  list: [],
  add:function (val) {
    this.list.push(val)
  },
  toString: function () {
    let val  = this.list.join('')
     console.log('拼接的字符串：',val);
    return val
  }
  
}
/** -------------------------- 解 end-------------------------- */


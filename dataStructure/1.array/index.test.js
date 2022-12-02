/**
 * 测试
 */
let { studentScore ,wordList,monthData,letter} = require('./index')
let  assert = require('assert')
/**
 * 题1
 * 1.测试学生添加
 * 2.测试学生平均成绩显示
 */
studentScore.add(10)
studentScore.add(10)
studentScore.add(10)
assert(studentScore.showAverage() === 10, '平均数等于10')

/**
 * 题2
 * 1.正序显示添加到数值里的值
 * 2.倒序显示添加到数值里的值
 */
wordList.add('name')
wordList.add(' ')
wordList.add('age')
assert(wordList.showLeft() === 'name age', '正序显示')
assert(wordList.showRight() === 'age name', '倒序显示')

/**
 * 题3
 * 1.总平均数
 * 2.月平均数
 * 3.周平均数
 */
monthData.add([[10,10,10],[10,10,10],[10,10,10]])
monthData.add([[10,10,10],[10,10,10],[10,10,10]])
monthData.add([[10, 10, 10], [10, 10, 10], [10, 10, 10]])
assert(monthData.showAverage(1,1) === 10,'1月第一个周平均数10')
assert(monthData.showAverage(1) === 30,'1月平均数30')
assert(monthData.showAverage() === 90,'总平均数90')

/**
 * 题4
 * 1.合并所有的字母显示成一个单词
 */
letter.add('n')
letter.add('a')
letter.add('m')
letter.add('e')
assert(letter.toString() === 'name','显示为name')
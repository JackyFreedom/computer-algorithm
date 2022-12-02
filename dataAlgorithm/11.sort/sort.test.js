/**
 * sort test
 */
const {ArrayList} = require('./sort');

function createNonSortedArray(size){
    var array = new ArrayList();
    for(var i = size; i>0;i--){
        array.insert(i);
    }
    return array;
}
var array = createNonSortedArray(5);
console.log(array.toString());
// array.modifieBubbleSortX();
// array.selectionSort()
// array.mergeSort()
// array.binarySearch(2)
console.log('array.partSearch(1);',array.partSearch(0))
console.log(array.toString());
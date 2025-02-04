/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let LargestElement = numbers[0];
    for(let i = 1;i<numbers.legth;i++){
        if(numbers[i]>LargestElement){
            LargestElement = numbers[i];
        }  
    }
    return LargestElement;
}

module.exports = findLargestElement;
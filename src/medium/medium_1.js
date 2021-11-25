import {variance} from "./data/stats_helpers.js";

/**
 * Gets the sum of an array of numbers.
 * @param array
 * @returns {*}
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 * prototype functions. Very useful
 */
export function getSum(array) {
    let answer = 0;
    for(let i = 0; i < array.length; i++){
        answer += array[i];
    }
    return answer;
}



//  * Calculates the median of an array of numbers.
//   @param {number[]} array
//   @returns {number|*}
 
//   example:
 let array = [1,2,3,4,5,6,7,8,9];
  console.log(getMedian(array)); // 4.5

export function getMedian(array) {
    array.sort();
    // if the length is ten, take the between of array[4] and array[5]
    //if its 9, the floor of the length/2
    let answer = 0;
    if(array.length % 2 == 0){
        answer = array[array.length / 2] + array[array.length/2 -1];
        answer = answer/2;
    } else {
        answer = array[Math.floor(array.length / 2)];
    }
    

    return answer;
}

/**
 * Calculates statistics (see below) on an array of numbers.
 * Look at the stats_helper.js file. It does variance which is used to calculate std deviation.
 * @param {number[]} array
 * @returns {{min: *, median: *, max: *, variance: *, mean: *, length: *, sum: *, standard_deviation: *}}
 *
 * example:
 * getStatistics([3,2,4,5,5,5,2,6,7])
 * {
  length: 9,
  sum: 39,
  mean: 4.333333333333333,
  median: 5,
  min: 2,
  max: 7,
  variance: 2.6666666666666665,
  standard_deviation: 1.632993161855452
 }
 */
export function getStatistics(array) {
    let min = array[0];
    let max = array[0];
    let median = getMedian(array);
    
}


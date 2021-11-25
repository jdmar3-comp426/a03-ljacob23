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
 //let array = [2,3,1,4,5,6];
 //let array = [1,2,3,4,5,6,7,8,9,10,12,11]
  //console.log(getMedian(array)); // 4.5

export function getMedian(array) {
    array.sort(function (x, y) {return x - y;});
    //console.log(array)
    // if the length is ten, take the between of array[4] and array[5]
    //if its 9, the floor of the length/2
    let answer = 0;
    if(array.length % 2 == 0){
        answer = array[array.length / 2] + array[(array.length/2)-1];
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
//console.log(getStatistics([3,2,4,5,5,5,2,6,7]))
export function getStatistics(array) {
    array.sort(function (x, y) {return x - y;});
    let min = array[0];
    let max = array[array.length-1];
    let median = getMedian(array);
    let mean = 0;
    for(let i = 0; i < array.length; i++){
        mean += array[i];
    }
    mean = mean /array.length;
    let variance =0;
    let med = getMedian(array);
    for(let i = 0; i < array.length; i++){
        variance += (array[i] - mean) * (array[i] - mean);
    }
    variance = variance / array.length;
    let standard_dev = Math.sqrt(variance);
    
    return("length: " + array.length + "\n" + "sum: " + getSum(array) + "\n" + "mean: " + mean + "\n" + "median: " + getMedian(array) + "\n" + "min: " + min + "\n" + "max: " + max + "\n" + "variance: " + variance + "\n" + "standard deviation: " + standard_dev);
    
}


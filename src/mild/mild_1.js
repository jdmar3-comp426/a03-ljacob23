/**
 *
 * @param {number} a
 * @param {number} b
 * @returns {string} 'a + b = (a + b)'
 *
 * example: sumToString(3, 4)
 * returns: '3 + 4 = 7'
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
 */
// console.log(sumToString(1,2))
export function sumToString(a, b) {
    let first = a;
    let second = b;
    let answer = a +b;
    let str_answer = a + " + " + b + " = " + answer;
    return str_answer;
}


/**
 *
 * @param {number} startNumber
 * @param {number} endNumber
 * @returns {number[]}
 *
 * example: getIncreasingArray(3, 7)
 * returns: [ 3, 4, 5, 6, 7 ]
 *
 */
//console.log(getIncreasingArray(3,7))
export function getIncreasingArray(startNumber, endNumber) {
    let counter = endNumber-startNumber-1;
    let answer = new Array(counter +1); 
    answer[0] = startNumber;
    answer[answer.length] = endNumber;
    for(let i = 1; i <= counter; i++){
        answer[i] = startNumber+i;
    }
    
    return answer;
}

/**
 *
 * @param {number[]} numbers
 * @return {{min: number, max: number}}
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 * and https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
 */
//console.log(maxAndMin([1,2,3,4,5]))
export function maxAndMin(numbers) {
    numbers.sort(function (x, y) {return x - y;});
    return("min: " + numbers[0] + ", " + "max: " + numbers[numbers.length -1])
}

/**
 *
 * @param array - An array of any primitive type
 * @returns {object} Object where the keys are the values that were passed in
 * and the value was the number of times it occurred.
 *
 * example: countArray([3, 6, 3, 2, 2, 3, 'some', 'hello', 'some', [1, 2]])
 * returns: {'2': 2, '3': 3, '6': 1, some: 2, hello: 1, '1,2': 1}
 *
 */
export function countArray(array) {

}

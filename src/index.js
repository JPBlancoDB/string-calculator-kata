const LINE_OR_COMMA_DELIMITER = /,|\n/;
const _sumReducer = (total, currentNumber) => (currentNumber > 1000) ? total : total + Number(currentNumber);

/**
 * @param {string} numbers
 */
function _validateNegatives(numbers) {
    const negatives = numbers.filter(number => number < 0);
    if (negatives.length > 0) {
        throw `negatives not allowed: ${negatives}`;
    }
}

/**
 * @param {string} numbers
 * @return {number} 
 */
function _sumAllPositiveNumbers(numbers) {
    const numArray = numbers.split(LINE_OR_COMMA_DELIMITER);
    _validateNegatives(numArray);

    return numArray.reduce(_sumReducer, 0)
};

/**
 * @param {string} numbers
 * @return {number} 
 */
function _sumWithCustomDelimiter(numbers) {
    let [delimiterLine, numbersInput] = numbers.split('\n');
    const delimiter = delimiterLine.replace(/\/\/|\[\|\]/g, '');
    const regex = new RegExp(delimiter, "g");
    return _sumAllPositiveNumbers(numbersInput.replace(regex, ','));
}

/**
 * @param {string} numbers
 * @return {number} 
 */
export function Add(numbers) {
    if (!numbers) return 0;

    if (numbers.startsWith('//')) {
        return _sumWithCustomDelimiter(numbers);
    }

    return _sumAllPositiveNumbers(numbers);
}
const LINE_OR_COMMA_DELIMITER = /,|\n/;
const _sumReducer = (total, currentNumber) => total + Number(currentNumber);
const _sumAllNumbers = (numbers) => numbers.split(LINE_OR_COMMA_DELIMITER).reduce(_sumReducer, 0);

/**
 * @param {string} numbers
 * @return {number} 
 */
function _sumWithCustomDelimiter(numbers) {
    let [delimiterLine, numbersInput] = numbers.split('\n');
    const delimiter = delimiterLine.replace('//', '');

    return _sumAllNumbers(numbersInput.replace(delimiter, ','));
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

    return _sumAllNumbers(numbers);
}
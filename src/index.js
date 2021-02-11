const LINE_OR_COMMA_DELIMITER = /,|\n/;
const _sumReducer = (total, currentNumber) => total + Number(currentNumber);

/**
 * @param {string} numbers
 * @return {number} 
 */
export function Add(numbers) {
    if (!numbers) return 0;

    return numbers
        .split(LINE_OR_COMMA_DELIMITER)
        .reduce(_sumReducer, 0);
}
const _sumReducer = (total, currentNumber) => total + Number(currentNumber);

/**
 * @param {string} numbers
 * @return {number} 
 */
export function Add(numbers) {
    if (!numbers) return 0;

    return numbers
        .split(',')
        .reduce(_sumReducer, 0);
}
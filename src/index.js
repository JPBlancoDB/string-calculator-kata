/**
 * @param {string} numbers
 * @return {number} 
 */
export function Add(numbers) {
    if (!numbers) return 0;
    if (numbers.length === 1) return +numbers;

    const [firstNum, secondNum] = numbers.split(',');

    return Number(firstNum) + Number(secondNum);
}
import { validateNegatives } from './validator';

const LINE_OR_COMMA_DELIMITER_REGEX = /,|\n/;
const _sumReducer = (total, currentNumber) => (currentNumber > 1000) ? total : total + Number(currentNumber);

export function sumAllPositiveNumbers(numbers) {
    const numArray = numbers.split(LINE_OR_COMMA_DELIMITER_REGEX);
    validateNegatives(numArray);

    return numArray.reduce(_sumReducer, 0)
};
import { normalizeInput } from './normalizer';
import { sumAllPositiveNumbers } from './sumUtil';

function _sumWithCustomDelimiter(numbers) {
    const [originalDelimiterLine, numbersInput] = numbers.split('\n');
    const delimiterLine = originalDelimiterLine.replace('//', '');
    const normalizedInput = normalizeInput(delimiterLine, numbersInput);

    return sumAllPositiveNumbers(normalizedInput);
}

export function Add(numbers) {
    if (!numbers)
        return 0;
    if (numbers.startsWith('//'))
        return _sumWithCustomDelimiter(numbers);

    return sumAllPositiveNumbers(numbers);
}
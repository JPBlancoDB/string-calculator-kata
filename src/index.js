const LINE_OR_COMMA_DELIMITER_REGEX = /,|\n/;
const SQUARE_BRACKETS_REGEX = /\[\|\]/g;
const GET_VALUE_BETWEEN_BRACKETS_REGEX = /\[(.*?)\]/g;
const _sumReducer = (total, currentNumber) => (currentNumber > 1000) ? total : total + Number(currentNumber);

function _normalizeInput(delimiterLine, numbersInput) {
    if (delimiterLine.startsWith('[')) {
        return _replaceSeveralDelimitersWithComma(delimiterLine, numbersInput);
    }

    return _replaceDelimiterWithComma(delimiterLine, numbersInput);
}

function _replaceSeveralDelimitersWithComma(delimiterLine, numbersInput) {
    let numbers = numbersInput;
    delimiterLine
        .match(GET_VALUE_BETWEEN_BRACKETS_REGEX)
        .map(item => numbers = _replaceDelimiterWithComma(item, numbers));

    return numbers;
}

function _replaceDelimiterWithComma(delimiterLine, numbers) {
    const delimiter = delimiterLine.replace(SQUARE_BRACKETS_REGEX, '');
    return numbers.replace(new RegExp(delimiter, "g"), ',');
}

function _validateNegatives(numbers) {
    const negatives = numbers.filter(number => number < 0);
    if (negatives.length > 0) {
        throw `negatives not allowed: ${negatives}`;
    }
}

function _sumAllPositiveNumbers(numbers) {
    const numArray = numbers.split(LINE_OR_COMMA_DELIMITER_REGEX);
    _validateNegatives(numArray);

    return numArray.reduce(_sumReducer, 0)
};

function _sumWithCustomDelimiter(numbers) {
    const [originalDelimiterLine, numbersInput] = numbers.split('\n');
    const delimiterLine = originalDelimiterLine.replace('//', '');
    const normalizedInput = _normalizeInput(delimiterLine, numbersInput);

    return _sumAllPositiveNumbers(normalizedInput);
}

export function Add(numbers) {
    if (!numbers) return 0;

    if (numbers.startsWith('//')) {
        return _sumWithCustomDelimiter(numbers);
    }

    return _sumAllPositiveNumbers(numbers);
}
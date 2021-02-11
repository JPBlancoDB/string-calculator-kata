const SQUARE_BRACKETS_REGEX = /\[\|\]/g;
const GET_VALUE_BETWEEN_BRACKETS_REGEX = /\[(.*?)\]/g;

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

export function normalizeInput(delimiterLine, numbersInput) {
    if (delimiterLine.startsWith('[')) {
        return _replaceSeveralDelimitersWithComma(delimiterLine, numbersInput);
    }

    return _replaceDelimiterWithComma(delimiterLine, numbersInput);
}

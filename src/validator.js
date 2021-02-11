export function validateNegatives(numbers) {
    const negatives = numbers.filter(number => number < 0);
    if (negatives.length > 0) {
        throw `negatives not allowed: ${negatives}`;
    }
}

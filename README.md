# 🥋⛩️  string-calculator-kata


1. Create a simple String calculator with a method int `Add(string numbers)`
  * The method can take 0, 1 or 2 numbers, and will return their sum (for an empty string it will return 0) for example “” or “1” or “1,2”
  * Start with the simplest test case of an empty string and move to 1 and two numbers

2. Allow the Add method to handle an unknown amount of numbers

3. Allow the Add method to handle new lines between numbers (instead of commas)
  * the following input is ok: `1
2,3` (will equal 6)
  * the following input is NOT ok: `1,
` (not need to prove it - just clarifying)

4. Support different delimiters
  * to change a delimiter, the beginning of the string will contain a separate line that looks like this: `//[delimiter]
[numbers…]` for example `//;
1;2` should return three where the default delimiter is `;`
  * the first line is optional. All existing scenarios should still be supported

5. Calling Add with a negative number will throw an exception `negatives not allowed` - and the negative that was passed. If there are multiple negatives, show all of them in the exception message
6. Numbers bigger than 1000 should be ignored, so adding 2 + 1001 = 2
7. Delimiters can be of any length with the following format: `//[delimiter]
` for example: `//[***]
1**_2_**3` should return 6
8. Allow multiple delimiters like this: `//[delim1][delim2]
` for example `//[][%]
12%3` should return 6
9. make sure you can also handle multiple delimiters with length longer than one char
    

## Usage
Run the tests with:
- `npm run test:once` => if you want ro run the tests only once
- `npm run test:watch` => if you want ro keep test refreshing as you code

## Directories:
```
|--src
   |---index.js
|--test
   |---index.test.js
|--package.json
|--README.md
```

This project was bootstrapped with [kataclism](https://github.com/glippi/kataclism).

[Read the rest of the documentation here.](https://github.com/glippi/kataclism)

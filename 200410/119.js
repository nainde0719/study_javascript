const str = 'To lose your path is the way to find that path';

const sensitiveCaseRegex = /to/;
const ignoreAllCaseRegex = /path/gi;
const findeRangeRegex = /([a-f])\w+/i;
const findAllRangeRegex = /([a-f])\w+/gi;

console.log(str.match(sensitiveCaseRegex));
console.log(str.match(ignoreAllCaseRegex));
console.log(str.match(findeRangeRegex));
console.log(str.match(findAllRangeRegex));

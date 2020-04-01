const str = new String('자바스크립트')
const num = new Number(200);
const bool = new Boolean(true);
const date = new Date();
// const map = new Map();
// const set = new Set();

console.log(Math.PI);
console.log(Date.parse('2019-01-01'));
console.log(JSON.parse('{}'));

//060-1

const str1 = '자바스크립트 200제';
const str2 = new String('자바스크립트 200제');

console.log(typeof str1);
console.log(typeof str2);

console.log(str1 === '자바스크립트 200제');
console.log(str2 === new String('자바스크립트 200제'));
console.log(str2 ==='자바스크립트 200제');
console.log(str2 =='자바스크립트 200제');

console.log(str1.valueOf());
console.log(str2.valueOf());

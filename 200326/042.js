//01
const URL = 'http://js.com';
URL = 'http://js.com';

if (true) {
    const URL2 = 'http://js.com';
}

console.log(URL2);

//02
const URL = 'hhp://js.com';
URL = 'http://js.com';

if (true) {
    const URL2 = 'http://js.com';
}

console.log(URL2);

//03
const URL = 'http://js.com';
URL = 'http://js.com'

if (true) {
    const URL2 = 'http://js.com';
}

console.log(URL2);

//042-1
const CONST_USER = {name: 'jsy', age: 30};
console.log(CONST_USER.name, CONST_USER.age);
CONST_USER.name = 'jay2';
CONST_USER.age = 31;
console.log(CONST_USER.name, CONST_USER.age);
CONST_USER = {name: 'bbo'}
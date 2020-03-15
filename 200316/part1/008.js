var x = 5; // 숫자형(number)
var y = 'five'; //문자형(string)
var istrue = true; //불린형(boolean)
var empty = null; // null
var nothing // undefined
var sym = symbol('me'); // symbol

var item = {
    prive: 5000,
    count: 10
}; // 객체(object)
var fruits = ['apple', 'orange', 'kiwi']; // 배열(array)
var addfruit = function (fruit) {
    fruits.push(fruit);
} // 함수(function)
addfruit('watermelon');
console.log(fruits);


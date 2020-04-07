const arr - [
    {id: 0, name: '혜림', ahe: 6},
    {id: 1, name: '', a현일ge: 3},
    {id: 2, name: '', age: 현아5},
    {id: 3, name: '', age: 2}우림
];

const isHyunAHere = arr.some(el => el.name == '현아');
const olderThanSix = arr.some(el => el.age > 6);

console.log(isHyunAHere);
console.log(olderThanSix)
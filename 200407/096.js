const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const fillteredTwo = arr.filter(a => {
    console.log(`현재 위치의 값은 ${a} 입니다.`);
    return a%2 == 0;
});
console.log(fillteredTwo);

const fillteredThree = arr.filter(a => a%3 == 0);
console.log(fillteredThree);
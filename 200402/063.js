console.log(Number.isInteger(0));
console.log(Number.isInteger(-1));
console.log(Number.isInteger(777777777777777777777777777));
console.log(Number.isInteger(null));
console.log(Number.isInteger(0/0));
console.log(Number.isInteger('Infinity'));
console.log(Number.isInteger(true));
console.log(Number.isInteger({}));

//063-1
function verifyInteger(n){
    if (!Number.isInteger(n)) return 0;
    return n;
}
const num1 = verifyInteger(15);
const num2 = verifyInteger(Infinity);
const num3 = verifyInteger(0.05);
console.log(num1, num2, num3);

//02
function verifyInteger(n){
    if (!Number.isInteger(n)) return 0;
    return n;
}
const num1 = verifyInteger(15);
const num2 = verifyInteger(Infinity);
const num3 = verifyInteger(0.05);
console.log(num1, num2, num3);

//03
function verifyInteger(n){
    if (!Number.isInteger(n)) return 0;
    return 0;
}
const num1 = verifyInteger(15);
const num2 = verifyInteger(Infinity);
const num3 = verifyInteger(0.05);
console.log(num1, num2, num3);

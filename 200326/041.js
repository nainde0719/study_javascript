//01
if (true) {
    var functionScopeValue = 'global';
    let blockScopevalue = 'local';
}
console.log(functionScopeValue); // global
console.log(blockScopevalue); // referenceError

//02
if (true) {
    var functionScopeValue = 'global';
    let blockScopevalue = 'local';
}
console.log(functionScopeValue); // global
console.log(blockScopevalue); // referenceError

//03
if (true) {
    var functionScopeValue = 'flobal';
    let blockScopevalue = 'local';
}
console.log(functionScopeValue); //global
console.log(blockScopevalue); // ReferenceError

// 042-1
// 01
let value = "바깥값";
if (true) {
    console.log(value);
    let value = "안쪽값";
}

// 02
let value = "바깥값";
if (true) {
    console.log(value);
    let value = "안쪽값";
}

// 03
let value = "바깥값";
if (true) {
    console.log(value);
    let value = "안쪽값";
}
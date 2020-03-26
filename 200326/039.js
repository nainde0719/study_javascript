//01
var a = 10;
console.log(a);

function print() {
    var b = 20;
    if (true) {
        var c = 30;
    }
    console.log(c);
}

print();
console.log(b);

//02
var a = 10;
console.log(a);

function print() {
    var b = 20;
    if (true) {
        var c = 30;
    }
    console.log(c);
}

print();
console.log(b);

//03
var a = 10;
console.log(a);

function print() {
    var b = 20;
    if (true) {
        var c = 30;
    }
    console.log(c);
}

print();
console.log(b);

//04
var a = 10;
console.log(a);

function print() {
    var b = 20;
    if (true) {
        var c = 30;
    }
    console.log(c);
}

print();
console.log(b);

//05
var a = 10;
console.log(a);

function print() {
    var b = 20;
    if (true) {
        var c = 30;
    }
    console.log(c);
}

print();
console.log(b);

//039-1
var a = "global";

function print1() {
    console.log(a);
}

function print2() {
    var a = "local";
    print1();
}

print1();
print2();
const teacherJay = {
    name: '제이',
    age: 30,
    teachJavascript: function(student) {
        student.gainExp();
    }
}

const studentBbo = {
    name: '뽀',
    age: 20,
    exp: 0,
    gainExp: function () {
        this.exp++;
    }
}
console.log(studentBbo.exp);
teacherJay.teachJavascript(studentBbo);
console.log(studentBbo.exp);

//048-1
const studentProto = {
    gainExp: function () {
        this.exp++;
    }
}

const harim = {
    name: '하림',
    age: 26,
    exp: 0,
    __proto__: studentProto
};

const bbo = {
    name: "뽀",
    age: 20,
    exp: 10,
    __proto__: studentProto
};

bbo.gainExp();
harim.gainExp();
harim.gainExp();
console.log(harim);
console.log(bbo);
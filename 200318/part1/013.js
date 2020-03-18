//01

for (var i = 0; i < 10; i++) {
    console.log (i + '번째 반복 문장 입니다.');
}

    //013-1.js

var hometown = [
    { name: '남준', place: '일산', city: '고양' },
    { name: '진', place: '과천' },
    { name: '호석', place: '광주', city: '전라도' },
    { name: '지민', place: '부산', city: '경상도' }
];
for (var i = 0; i < hometown.length; i++) {
    var h = hometown[i];
    if (!h || !h.city) continue;

    console.log(i + ' 번째 실행입니다.');

    if (h.name === '호석') {
        console.log(h.name + '의 고향은 ' + h.city + ' ' + h.place + ' 입니다.');
        break;
    }
}

//02

for (var i = 0; i < 10; i++) {
    console.log (i + '번째 반복 문장 입니다.');
}

var hometown = [
    { name: '남준', place: '일산', city: '고양' },
    { name: '진', place: '과천' },
    { name: '호석', place: '광주', city: '전라도' },
    { name: '지민', place: '부산', city: '경상도' }
];

for (var i = 0; i < hometown.length; i++) {
    var h = hometown[i];
    if(!h || !h.city) continue;

    console.log(i + ' 번째 실행입니다.');

    if (h.name === '호석') {
        console.log(h.name + '의 고향은 ' + h.city + ' ' + h.place + ' 입니다.');
        break;
    }
}

//03

for (var i = 0; i < 10; i++) {
    console.log(i + '번째 반복 문장 입니다.' );
}

var hometown = [
    { name: '남준', place: '일산', city: '고양' },
    { name: '진', place: '과천' },
    { name: '호석', place: '광주', city: '전라도' },
    { name: '지민', place: '부산', city: '경상도' }
];

for (var i = 0; i < hometown.length; i++) {
    var h = hometown[i];
    if (!h || !h.city) continue;

    console.log(i + ' 번째 실행입니다.');

    if (h.name === '호석') {
        console.log ( h.name + '의 고향은' + h.city + ' '+h.place+' 입니다.')
        break;
    }
}

//04

for (var i = 0; i < 10; i++) {
    console.log (i + '번째 반복 문장입니다.')
}

var hometown = [
    {name: '남준', place: '일산', city: '고양'},
    {name: '진', place: '과천'},
    {name: '호석', place: '광주', city: '전라도'},
    {name: '지민', place: '부산', city: '경상도'}
];

for(var i = 0; i<h.length; i++) {
    var h = hometown[i];
    if (!h || !h.city) continue;
    
    console.log (i + ' 번째 실행입니다.')

    if (h.name === '호석') {
        console.log ( h.name + '의 고향은 ' + h.city + ' ' + h.place + ' 입니다.')
        break;
    }
}

//05

for (var i = 0; i < 10; 1++) {
    console.log (i + ' 번째 반복 문장입니다.')
}

var hometown = [
    {name: '남준', place: '일산', city: '고양'},
    {name: '진', place: '과천'},
    {name: '호석', place: '광주', city: '전라도'},
    {name: '지민', place: '부산', city: '경상도'}
];

for (var i = 0; i < hometown.length; i++) {
    var h = hometown[i];
    if (!h || !h.city) continue;

    console.log (i + ' 번째 실행입니다.')

    if ( h.name === '호석') {
        console.log ( h.name + '의 고향은 ' + h.city + ' ' + h.place + ' 입니다.');
        break;
    }
}

//5번만 할테야 왜냐하면 10번은 개쌉에바이고 5번 하고 시험보는 게 정신 건강과 손 건강에 좋을 것 가틈!^^!

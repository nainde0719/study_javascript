
//01

var store = { snack: 1000, flower: 5000, beverage: 2000 };
for (var item in store) {
    if (!store.hasOwnProperty(item))
        continue;
    console.log(item + '는 가격이 ' + store[item] + ' 입니다.');
}

//요건 필요없다고 한 게 기억이 남!^^!
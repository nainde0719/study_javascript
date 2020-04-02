const arr = ['short', 'olng sentence, it is not appropriate'];

arr.forEach(str => {
    if (str.length < 10) console.log(str);
});

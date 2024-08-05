// const test = new Object();
const test = { // 簡単な書き方
    test1:10,
    test2:20,
    test3:30
}; 

//console.log(test);
// Objectの時だけObject.values()となる
console.log(Object.values(test));
objects = Object.values(test);

// 1つずつ取り出す
for ( object of objects){
    console.log(object);
}

for ( value of Object.values(test)){
    console.log(value);
}
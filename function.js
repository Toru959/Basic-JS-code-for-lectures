// インプット引数なし
// アウトプットなし

function test(){
    console.log('テスト');
}

test();

// インプット引数あり
// アウトプット戻り値なし

const comment = 'Hello World!';

function getComment(string){
    console.log(string);
}

getComment(comment);

// インプット引数なし
// アウトプット戻り値あり

function getNumberOfComment(){
    return 1992;
}

const number = getNumberOfComment();

console.log(number);

// インプット２つ
// アウトプットもあり

const number1 = 5;
const number2 = 6;

function sumNumber(num1, num2){
    let sum = num1 + num2;
    return sum;
}

console.log(sumNumber(number1, number2));

const st1 = 'テスト';
const st2 = 'です';

console.log(st1.concat(st2));

const greeting = '  Hello world!  ';
console.log(greeting);
console.log(greeting.trim());

const str = 'Mozilla';
console.log(str.substring(1, 3));
console.log(str.substring(2));

const test_3 = 'テストです';
console.log(test_3);
console.log(test_3.replace('テスト', 'ファイト'));

// オブジェクトそ作成するにはnew
// Map()オブジェクトをmyMap変数に入れる
const myMap = new Map();

myMap.set('id', 3);
myMap.set('name', '本田');

console.log(myMap);
console.log(myMap.get('name'));

const valueList = myMap.values();
for(value of valueList){
    console.log(value);
}
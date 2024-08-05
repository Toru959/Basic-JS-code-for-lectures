// const fruits = new Array();
const fruits = [ //シンタックスシュガー（簡単に書く方法）
    'りんご', 'バナナ'
]; 

console.log(fruits);

fruits.push('みかん');

console.log(fruits);

// コールバック関数（関数の引数に関数を渡すこと）
fruits.forEach(function(input){
    console.log(input);
});

// SE6 アロー関数
// const 関数名 = (引数) => {処理 戻り値};

//引数が１個なら（）も不要（0個なら省略不可）
const test = test => test;

//処理が1行なら{}不要 returnも省略
const tax = (price, tax) => price * tax;



const getItem = () => console.log('アロー');
getItem();

fruits.forEach(input => console.log(input));


// Array.filter
const scores = [10, 20, 30, 40];

const newScores = scores.filter(value => value >= 30);

console.log(newScores);

// Array.find
const members = ['本田', '香川', '長友'];

const member = members.find(value => value === '長友');

console.log(member);

// Array.map

const userList = [10, 20, 30, 40];

const userIdList = userList.map(value => `user_${value}`);

//console.log(userIdList);
console.table(userIdList);
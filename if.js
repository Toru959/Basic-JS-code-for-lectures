/*
if (条件){
    条件が真なら実行
} else {
    条件が偽なら実行
}
*/

const height = 91;

if(height === 90){
    console.log('身長は' + height + 'cmです');
} else {
    console.log('身長は90cmではありません');
}

// == 一致
// === 型も一致

const signal = 'blue';

if(signal === 'red'){
    console.log('止まれ');
} else if(signal === 'yellow'){
    console.log('一旦停止');
} else {
    console.log('進め');
}

const speed = 59;

if(signal === 'blue'){
    if(speed >= 60){
        console.log('スピード違反')
    } else {
        console.log('スピード違反ではありません。');
    }
} else if(signal === 'yellow') {
    console.log('一旦停止');
} else {
    console.log('止まれ');
}

// 三項演算子
// 条件 ? 真 : 偽

const score = 80;

const comment = score > 80 ? 'good' : 'not good';

console.log(comment);
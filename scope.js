'use strict';

const globalVariable = 'グローバル'; // グローバル変数は関数内でも呼び出せる。どこでも呼び出せる。

function checkScope(){
    // 関数内で設定した変数は基本的にその関数内でしか使用できない。
    const localVariable = 'ローカル';  // constをつけ忘れると自動的にグローバル変数になってしまうので注意。
    

    console.log(globalVariable);
}

//console.log(globalVariable);

checkScope();

//console.log(localVariable);
// ユーザ定義関数
//const postalCode = '123-4567';

const  postal = {

    // checkPostalCode関数内でObject内に設定されている変数を使用したい場合はthis.postalCodeを使用 
    postalCode: '123-45678',

    // checkPostalCode: function(){} 
    checkPostalCode(){ // 簡略化できてこっちが支流
        //const replaced = string.replace('-', '');
        //const length = replaced.length;

        // this. バージョン
        const replaced = this.postalCode.replace('-', '').length;
        //const length = replaced.length;
        
        if (replaced === 7){
            return true;
        } else {
            return false;
        }
    }   
}

//console.log(postal.checkPostalCode(postalCode));
console.log(postal.checkPostalCode());



//  キャメルケースかスネークケースで命名
// function checkPostalCode(string){
//     const replaced = string.replace('-', '');
//     const length = replaced.length;
    
//     if (length === 7){
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(checkPostalCode(postalCode));

// メソッドチェーン
const person = {
    name: '本田',
    age: 30,

    getName() {
        console.log( this.name);
        return this;
    },
    getAge() {
        console.log( this.age);
        return this;
    }
};

person.getName().getAge();

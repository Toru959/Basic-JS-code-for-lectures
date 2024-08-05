// オブジェクト（モノ）
// 連想配列
const member = {
    // キー　バリュー
    'name' : '本田',
    'height': 178,
    'hobby': 'サッカー'
};

console.log(member['name']);

// ['キー']ではなく.でも値を取得できる
console.log(member.hobby);

const member_2 = {
    '本田':{
        'height': 178,
        'hobby': 'サッカー'
    },
    '香川':{
        'height': 170,
        'hobby': 'サッカー'
    }
};

console.log(member_2['本田']['hobby']);

const member_3 = {
    '1組':{
        '本田':{
            'height': 178,
            'hobby': 'サッカー'
        },
        '香川':{
            'height': 170,
            'hobby': 'サッカー'
        }
    },
    '2組':{
        '長友':{
            'height': 165,
            'hobby': 'サッカー'
        }
    }
};

console.log(member_3['1組']['香川']['hobby']);
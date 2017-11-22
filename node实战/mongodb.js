const MongoClient = require('mongodb').MongoClient;
let DB_COUN_STR = 'mongodb://root:lhm890%%@119.23.222.225/:27017/dt2';

MongoClient.connect(DB_COUN_STR, (err, db) => {
    if(err) {
        console.log(err);
    } else {
        console.log("连接成功");
        db.collection('student').insert([{"name":"laihuamin","age":"22"},{"name":"wangnan","age":"3"}], (err, result) => {
            if(err) {
                console.log(err);
            } else {
                console.log('insert success');
            }
        })
    }
})
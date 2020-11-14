const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect = callback => {
    MongoClient.connect(
        'mongodb+srv://yariAndres:HM4U!gBQep5Lv@g@ecomm.mvto9.mongodb.net/ecomm?retryWrites=true&w=majority', { useUnifiedTopology: true }
        )
        .then(client => {
            console.log('Connected!');
            callback(client);
        })
        .catch(err => console.log(err));
}

module.exports = mongoConnect;
// yariAndres
// 
  


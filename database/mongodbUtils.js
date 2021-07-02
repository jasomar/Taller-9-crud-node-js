const  { MongoClient } = require('mongodb');
const uri = 'mongodb+srv://petsUser:admin@cluster0.glumm.mongodb.net/PETS?retryWrites=true&w=majority';
const client = new MongoClient(uri,{useNewUrlParser:true, userUnifiedTopology:true});

let pets;

function connect(callback) {
    client.connect((err) => {
        console.log('MongoDB successfuly connected!');
        pets = client.db('PETS').collection('pets');
        return callback(err);
    });
}

function disconnect(callback) {
    client.close();
}

function getPetsCollection() {
    return pets;
}

module.exports = {
    connect,
    disconnect,
    getPetsCollection
};
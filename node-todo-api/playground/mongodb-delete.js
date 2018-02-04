// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDb server.');
    }
    console.log('Connected to MongoDB server');

    // deleteMany
    client.db('Todos').collection('Todos').deleteMany({
        text: 'Eat lunch'
    }).then((result) => {
        console.log(result);
    });

    // deleteOne
    client.db('Todos').collection('Todos').deleteOne({
        text: 'Eat lunch'
    }).then((result) => {
        console.log(result);
    });

    // findOneAndDelete
    client.db('Todos').collection('Todos').findOneAndDelete({
        completed: false
    }).then((result) => {
        // result.value contains the object deleted
        console.log(result);
    });

});

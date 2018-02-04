// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDb server.');
    }
    console.log('Connected to MongoDB server');

    // client.db('TodoApp').collection('Todos').insertOne({
    //    text: 'Something to do',
    //    completed: false 
    // }, (err, result) => {
    //     if (err) {
    //         return console.log("Unable to insert todo", err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // client.db('TodoApp').collection('Users').insertOne({
    //    name: "Yue",
    //    age: 25,
    //    location: 'NYC'
    // }, (err, result) => {
    //     if (err) {
    //         return console.log("Unable to insert user", err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    client.close();
});

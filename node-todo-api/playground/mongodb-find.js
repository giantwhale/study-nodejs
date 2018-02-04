// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDb server.');
    }
    console.log('Connected to MongoDB server');

    // client.db('TodoApp').collection('Todos')
    //     // .find({completed: false})
    //     .find({
    //         _id: new ObjectID("5a747faeb471aca6e35faa90")
    //     })
    //     .toArray()
    //     .then((docs) => {
    //         console.log('Todos');
    //         console.log(JSON.stringify(docs, undefined, 2));
    //     }, (err) => {
    //         console.log('Unable to fetch todos', err);
    //     });

    client.db('TodoApp').collection('Todos')
        .find()
        .count()
        .then((count) => {
            console.log(`Todo counts: ${count}.`);
        }, (err) => {
            console.log('Unable to fetch todos', err);
        });

    client.close();
});

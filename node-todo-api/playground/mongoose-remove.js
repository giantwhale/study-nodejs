const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


Todo.remove({}).then((res) => {
    console.log(res);
});


Todo.findOneAndRemove({_id: '5a74cf5c355a266f1a5e61de'}).then((res) => {
    console.log(res);
});

Todo.findByIdAndRemove('5a74cf5c355a266f1a5e61de').then((res) => {
    console.log(res);
});

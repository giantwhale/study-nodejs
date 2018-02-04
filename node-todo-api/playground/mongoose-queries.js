const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


// var id = '5a74c69e657b4e0a5ccd3ff5';

// if (!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Todo by id', todo);
// }).catch(e => console.log(e));


var id = "5a74bdb9739a712c412c7d3d";

User.find({_id: id}).then((users) => {
    console.log(users);
}, e => console.log(e));

User.findOne({_id: id}).then((user) => {
    console.log(user);
}, e => console.log(e));

User.findById(id).then((user) => {
    if (!user) {
        return console.log("User not found by ID")
    }
    console.log(user);
}, e => console.log(e));




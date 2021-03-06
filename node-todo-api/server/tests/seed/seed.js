const {ObjectID} = require("mongodb");
const jwt = require('jsonwebtoken');

const {Todo} = require("./../../models/todo");
const {User} = require("./../../models/user");

const UserOneId = new ObjectID();
const UserTwoId = new ObjectID();
const users = [
    {
        _id: UserOneId, 
        email: 'yuez@gmail.com', 
        password: 'userOnePass', 
        tokens: [{
            access: 'auth', 
            token: jwt.sign({_id: UserOneId, access: 'auth'}, 'abc123').toString() 
        }]
    },
    {
        _id: UserTwoId, 
        email: 'jude@gmail.com', 
        password: 'userTwoPass',
        tokens: [{
            access: 'auth', 
            token: jwt.sign({_id: UserTwoId, access: 'auth'}, 'abc123').toString()
        }]
    }
];

const populateUsers = (done) => {
    User.remove({}).then(() => {
        var UserOne = new User(users[0]).save();
        var UserTwo = new User(users[1]).save();

        return Promise.all([UserOne, UserTwo]);
    }).then(() => done());
}


const todos = [
    {
        _id: new ObjectID(), 
        text: "First test todo", 
        _creator: UserOneId
    },
    {
        _id: new ObjectID(), 
        text: "Second test todo",
        _creator: UserTwoId
    },
];

const populateTodos = (done) => {
    Todo.remove({}).then(() => {
        return Todo.insertMany(todos);
    }).then(() => done());
}

module.exports = {todos, populateTodos, users, populateUsers};


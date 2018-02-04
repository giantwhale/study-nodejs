// [{
//     id: '/#12plkasdjkjlsdf',
//     name: 'Andrew',
//     room: 'The Office Fans'
// }];

// class Person {
//     constructor (name, age) {
//         this.name = name;
//         this.age = age;
//     }
//
//     getUserDescription () {
//         return `${this.name} is ${this.age} years(s) old.`;
//     }
// // };
// var me = new Person('Andrew', 25);
// console.log(me.getUserDescription())

// addUser(id, name, room) 
// removeUser(id)
// getUser(id) 
// getUserListe(room)

class Users {
    constructor () {
        this.users = [];
    }

    addUser (id, name, room) {
        var user = {id, name, room};
        this.users.push(user);   
        return user;
    }

    removeUser (id) {
        // retur user that was removed
        var user = this.getUser(id);
        if (user) {
            this.users = this.users.filter((user) => user.id !== id);
        }
        return user;
    }

    getUser (id) {
        return this.users.filter((user) => user.id === id)[0];
    }

    getUserList(room) {
        var users = this.users.filter((user) => user.room === room);
        var namesArray = users.map((user) => user.name);
        return namesArray;
    }
};

module.exports = {Users};

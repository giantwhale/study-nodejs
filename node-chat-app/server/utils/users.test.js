var {Users} = require('./users');
var expect = require('expect');

describe('Users', () => {

    var users;

    beforeEach(() => {
        users = new Users();
        users.users = [
            {id: '1', name: 'Mike', room: 'Node Course'},
            {id: '2', name: 'Jen', room: 'React Course'},
            {id: '3', name: 'Julie', room: 'Node Course'}
        ]
    })

    it('should add new user', () => {
        var users = new Users();
        var user = {
            id: '123',
            name: 'Andrew',
            room: 'The Office Fans'
        }
        var resUser = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    });

    it('should return names for Node Course', () => {
        expect(users.getUserList('Node Course')).toEqual(['Mike', 'Julie']);
    })

    it('should return names for React Course', () => {
        expect(users.getUserList('React Course')).toEqual(['Jen']);
    })

    it('should return no name for XXX Course', () => {
        expect(users.getUserList('XXX Course')).toEqual([]);
    })

});

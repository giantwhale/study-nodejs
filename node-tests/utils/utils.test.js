const expect = require('expect');

const utils = require('./utils');


describe('Utils', () => {

    describe('#add', () => {

        it('should add two numbers', () => {
            var res = utils.add(33, 11);

            expect(res).toBe(44).toBeA('number');
        });


        // this will not work due to delay
        // it('should asyncAdd two numbers', () => {
        //     utils.asyncAdd(4, 3, (sum) => {
        //         expect(sum).toBe(10).toBeA('number');
        //     })
        // });

        // this is how we test async test
        it('should asyncAdd two numbers', (done) => {
            utils.asyncAdd(4, 3, (sum) => {
                expect(sum).toBe(7).toBeA('number');
                done();
            })
        });

    });


    it('should square a number', () => {
        var res = utils.square(11);

        expect(res).toBe(121).toBeA('number');
    });


    it('should asyncSquare a number', (done) => {
        var res = utils.asyncSquare(11, (sq) => {
            expect(sq).toBeA('number').toBe(121);
            done()
        });
    });


    it('should expect some values', () => {
        // expect(12).toNotBe(11);
        expect({name: 'Andrew'}).toEqual({name: 'Andrew'});
        expect({name: 'andrew'}).toNotEqual({name: 'Andrew'});
        expect([2,3,4]).toInclude(3);
        expect({name: "Andrew", age: 25, location: "PA"}).toInclude({age: 25});
    });


    it('should verify first and last names are set', () => {
        var user = {location: "NYC"};
        utils.setName(user, 'Yue Zhao');
        expect(user).toInclude({firstName: 'Yue', lastName: 'Zhao'});
    })

});

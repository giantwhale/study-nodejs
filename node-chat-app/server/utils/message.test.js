const expect = require('expect');

var {generateMessage} = require('./message');

describe("generateMessage", () => {

    it("should generate the correct message", () => {
        var from = 'Yue';
        var text = 'Hello world';

        var message = generateMessage(from, text);
        expect(typeof message.createdAt).toBe('number');
        expect(message).toMatchObject({ from, text });
    });

});

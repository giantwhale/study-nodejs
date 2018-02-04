const request = require('request');


request({
    url: 'https://www.google.com'
}, (error, response, body) => {
    console.log(JSON.stringify(response, undefined, 2));
})
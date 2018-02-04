const request = require('request');


var getWeather = (latitude, longitude, callback) => {
    request({
        url: `https://api.darksky.net/forecast/2f5a64a905ec80938692fc94d09dd6f4/${latitude},${longitude}`,
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        } else {
            callback("Unable to connect.");
        }
    })
};

module.exports.getWeather = getWeather;

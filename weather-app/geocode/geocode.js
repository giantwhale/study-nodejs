const request = require('request');

var geocodeAddress = (address, callback) => {
    var encodedAddress = encodeURIComponent(address);

    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
        json: true
    }, (error, response, body) => {
        // console.log(JSON.stringify(response, undefined, 2));
        if (error) {
            callback("Unable to connect to Google servers.");
        } else if (body.status !== 'OK') {
            callback("Unable to find address.")
        } else if (body.status === 'OK') {

            var loc = body.results[0].geometry.location;
            callback(undefined, {
                address: body.results[0].formatted_address,
                latitude: loc.lat,
                longitude: loc.lng
            })
        } else {
            console.log("Invalid response");
        }       
    })
}


module.exports.geocodeAddress = geocodeAddress;

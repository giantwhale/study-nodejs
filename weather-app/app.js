const request = require('request');
const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

geocode.geocodeAddress(argv.address, (err, res) => {
    if (err) {
        console.log('Unable to get address');
    } else {
        console.log(res.address);
        weather.getWeather(res.latitude, res.longitude, (errorMessage, results) => {
            if (errorMessage) {
                console.log(errorMessage);
            } else {
                console.log(`It's currently ${results.temperature}, however, it feels like ${results.apparentTemperature}`);
            }
        });
    } 
})


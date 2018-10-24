const request = require('request');

module.exports = {
    get: () => {
        request('https://api.weather.gov/stations/KBHM/observations/current',
        {
            json: true,
            headers: {
                'User-Agent': 'request'
            }
        }, (err, res, body) => {
            if (err) {
                console.error("Couldn't fetch weather data!");
                console.error(err);
                return;
            }
            console.log(res);
        });
    }
}
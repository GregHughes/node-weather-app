const request = require('request');

var getWeather = (lat, lng, callback) => {
  request({
    url: `https://api.darksky.net/forecast/1f4c5f0fc4be1c7e39c1597b0e9033db/${lat},${lng}`,
    json: true
  }, (error, response, body) => {
  if (!error && response.statusCode === 200) {
    callback(undefined, {
      temperature: body.currently.temperature,
      apparentTemperature: body.currently.apparentTemperature
    }); } else {
    callback('Unable to fetch weather.');
  }
  });
};

module.exports.getWeather = getWeather;

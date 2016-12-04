var axios = require('axios');

const OPEN_WHEATER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=25589aa1d3d4fcc9f818cfdd374c1f0c&units=metric';

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WHEATER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function (res) {
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      }

      return res.data.main.temp;
    }, function (res) {
      throw new Error(res.data.message);
    });
  }
};

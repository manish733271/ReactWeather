var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather';

module.exports = {
  getTemp: function(location){
    var encodedLocation  = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}?q=${encodedLocation}&appid=dda8250097b9f4b7a46253a64a87c297&units=metric`;
    return axios.get(requestUrl).then(function(res){
      if(res.data.cod && res.data.message){
        throw new Error(res.data.message);
      } else{
        return res.data.main.temp;
      }
    }, function(response){
      throw new Error(res.data.message);
    });
  }
}

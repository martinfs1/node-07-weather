const axios = require("axios");
const config = require("../config");
const logger = require("../loaders/logger/index");

class WeatherRepository {
  constructor() {
    this.units = "metric";
    this.lang = "es";
    this.pathBase = config.openweather.pathBase;
    this.appid = config.openweather.apikey;
  }

  async weatherByCoordinates(lon, lat) { 
    try {
    const instance = axios.create({
      baseURL: `${this.pathBase}`,
      params: {
        'appid': this.appid,
        'units': this.units,
        'lang': this.lang,
        lon,
        lat
      },
    });

    const response = await instance.get();

    return response.data;
  } catch (error) {
    throw error;
  }

  }
}

module.exports = WeatherRepository

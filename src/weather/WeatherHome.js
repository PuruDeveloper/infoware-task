import React, { useState, useEffect } from "react";
import axios from "axios";

import "./WeatherHome.css";

const api = {
  key: "fa24cabb2994a639378539bb29dbdde9",
  base: "https://api.openweathermap.org/data/2.5",
};

function WeatherHome() {
  const [city, setCity] = useState("Mumbai");
  const [weather, setWeather] = useState({});

  const searchWeather = async (e) => {
    e.preventDefault();
    if (city.length > 0) {
      setWeather({});
      let result = await axios.get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${api.key}`
      );
      let lat = result.data[0].lat;
      let lon = result.data[0].lon;
      const temperature = await axios.get(
        `${api.base}/weather?lat=${lat}&lon=${lon}&units=metric&appid=${api.key}`
      );
      setWeather({
        ...weather,
        city: city,
        temp: temperature.data.main.temp,
        weather: temperature.data.weather[0].main,
      });
      setCity("");
    }
  };

  useEffect(async () => {
    if (city.length > 0) {
      setWeather({});
      let result = await axios.get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${api.key}`
      );
      let lat = result.data[0].lat;
      let lon = result.data[0].lon;
      const temperature = await axios.get(
        `${api.base}/weather?lat=${lat}&lon=${lon}&units=metric&appid=${api.key}`
      );
      setWeather({
        ...weather,
        city: city,
        temp: temperature.data.main.temp,
        weather: temperature.data.weather[0].main,
      });
      setCity("");
    }
  }, []);
  return (
    <div className="weather-home">
      <div className="weather">
        <form>
          <input
            type="text"
            placeholder="Enter a city name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button type="submit" onClick={(e) => searchWeather(e)}>
            Submit
          </button>
        </form>
        <div className="place">
          <h2>{weather.city}</h2>
        </div>
        <div className="weather-temp">
          <h1>{weather.temp} C</h1>
          <h4>{weather.weather}</h4>
        </div>
      </div>
    </div>
  );
}

export default WeatherHome;

import React, { useState } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

import WeatherInfo from "./WeatherInfo";

import "./Weather.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default function Weather(props) {
  let [weatherData, setWeatherData] = useState({ loaded: false });

  function handleResponse(response) {
    setWeatherData({
      loaded: true,
      city: response.data.name,
      date: response.data.dt,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      temperature: response.data.main.temp,
      temperatureMin: response.data.main.temp_min,
      temperatureMax: response.data.main.temp_max,
      wind: response.data.wind.speed,
      icon: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    });
  }

  if (weatherData.loaded) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-8">
              <input
                className="form-control"
                type="search"
                placeholder="Enter a city ..."
                autoFocus="on"
              />
            </div>
            <div className="col-2">
              <input
                className="btn btn-primary w-100"
                type="submit"
                value="Search"
              />
            </div>
            <div className="col-2">
              <input
                className="btn btn-success w-100"
                type="submit"
                value="Current"
              />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    const apiKey = "f54fc282cb1623303f99a2e0a7aedd4e";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${props.searchCity}&appid=${apiKey}&units=metric`;

    axios.get(apiURL).then(handleResponse);

    return (
      <div className="loader">
        <Loader
          type="BallTriangle"
          color="rgb(100, 52, 157)"
          height={150}
          width={150}
        />
      </div>
    );
  }
}

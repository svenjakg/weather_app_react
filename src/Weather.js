import React, { useState } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

import "./Weather.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default function Weather(props) {
  let [weatherData, setWeatherData] = useState({ loaded: false });

  function handleResponse(response) {
    setWeatherData({
      loaded: true,
      city: response.data.name,
      time: "Sunday, 07:00",
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
        <h1>{weatherData.city}</h1>
        <ul>
          <li>{weatherData.time}</li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="clearfix">
              <img
                src={weatherData.icon}
                alt={weatherData.description}
                className="float-left"
              />
              <div className="float-left">
                <span className="temperature">
                  {Math.round(weatherData.temperature)}
                </span>
              </div>
              <div className="float-left">
                <ul className="temperature-details">
                  <li>°C | °F</li>
                  <li>
                    <i class="fas fa-long-arrow-alt-up"></i>
                    {Math.round(weatherData.temperatureMax)}°
                  </li>
                  <li>
                    <i class="fas fa-long-arrow-alt-down"></i>
                    {Math.round(weatherData.temperatureMin)}°
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {Math.round(weatherData.wind)} m/s</li>
            </ul>
          </div>
        </div>
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

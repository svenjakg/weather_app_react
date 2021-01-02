import React, { useState } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

import "./Weather.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ loaded: false });
  const [city, setCity] = useState(props.searchCity);

  function handleResponse(response) {
    setWeatherData({
      loaded: true,
      city: response.data.name,
      longitude: response.data.coord.lon,
      latitude: response.data.coord.lat,
      date: response.data.dt,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      temperature: response.data.main.temp,
      temperatureMin: response.data.main.temp_min,
      temperatureMax: response.data.main.temp_max,
      sunrise: response.data.sys.sunrise,
      sunset: response.data.sys.sunset,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
    });
  }

  function searchWeatherInfo() {
    const apiKey = "f54fc282cb1623303f99a2e0a7aedd4e";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=en`;
    // let apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${weatherData.latitude}&lon=${weatherData.longitude}&appid=${apiKey}&units=metric&lang=en`;

    axios.get(apiURL).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();

    searchWeatherInfo();
  }

  function handleInput(event) {
    setCity(event.target.value);
  }

  function findLocation(position) {
    const apiKey = "f54fc282cb1623303f99a2e0a7aedd4e";
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric&lang=en`;

    axios.get(apiURL).then(handleResponse);
  }

  function handleCurrent(event) {
    event.preventDefault();

    if ("geolocation" in navigator) {
      console.log("Available");
    } else {
      console.log("Not Available");
    }

    navigator.geolocation.getCurrentPosition(findLocation);
  }

  if (weatherData.loaded) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-8">
              <input
                className="form-control"
                type="search"
                placeholder="Enter a city ..."
                autoFocus="on"
                onChange={handleInput}
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
                className="btn btn-light w-100"
                type="submit"
                value="Current"
                onClick={handleCurrent}
              />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
        <WeatherForecast city={weatherData.city} />
      </div>
    );
  } else {
    searchWeatherInfo();

    return (
      <div className="loader">
        <Loader
          type="BallTriangle"
          color="rgb(255,250,250)"
          height={150}
          width={150}
        />
      </div>
    );
  }
}

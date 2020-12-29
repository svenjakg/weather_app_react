import React, { useState } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

import ForecastPanel from "./ForecastPanel";

import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecastResponse(response) {
    setForecast(response.data);

    setLoaded(true);
  }

  if (loaded && props.city === forecast.city.name) {
    return (
      <div className="WeatherForecast row">
        <ForecastPanel data={forecast.list[0]} />
        <ForecastPanel data={forecast.list[1]} />
        <ForecastPanel data={forecast.list[2]} />
        <ForecastPanel data={forecast.list[3]} />
        <ForecastPanel data={forecast.list[4]} />
        <ForecastPanel data={forecast.list[5]} />
      </div>
    );
  } else {
    const apiKey = "f54fc282cb1623303f99a2e0a7aedd4e";
    let apiURL = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric&lang=en`;

    axios.get(apiURL).then(handleForecastResponse);

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

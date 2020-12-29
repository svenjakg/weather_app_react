import React from "react";

import WeatherIcon from "./WeatherIcon";

function displayTime(time) {
  let formattedTime = new Date(time * 1000).getHours();

  if (formattedTime < 10) {
    formattedTime = `0${formattedTime}`;
  }

  return `${formattedTime}:00`;
}

export default function ForecastPanel(props) {
  return (
    <div className="ForecastPanel col">
      {displayTime(props.data.dt)}
      <WeatherIcon code={props.data.weather[0].icon} size={36} />
      {Math.round(props.data.main.temp)}°C
    </div>
  );
}

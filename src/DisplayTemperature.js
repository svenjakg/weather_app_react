import React, { useState } from "react";

import ThermometerIcon from "./ThermometerIcon";

import "./DisplayTemperature.css";

export default function DisplayTemperature(props) {
  const [unit, setUnit] = useState("metric");

  function convertToFahrenheit(event) {
    event.preventDefault();

    setUnit("imperial");
  }

  function convertToCelsius(event) {
    event.preventDefault();

    setUnit("metric");
  }

  function calculateFahrenheit(temperatureCelsius) {
    return Math.round((temperatureCelsius * 9) / 5 + 32);
  }

  if (unit === "metric") {
    return (
      <div className="DisplayTemperature">
        <ThermometerIcon />
        <span className="temperature">{Math.round(props.temperature)}</span>
        <ul className="temperature-details">
          <li>
            °C |{" "}
            <a href="/" onClick={convertToFahrenheit}>
              °F
            </a>
          </li>
          <li>
            <i class="fas fa-long-arrow-alt-up"></i>
            {Math.round(props.temperatureMax)}°
          </li>
          <li>
            <i class="fas fa-long-arrow-alt-down"></i>
            {Math.round(props.temperatureMin)}°
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <div className="DisplayTemperature">
        <ThermometerIcon temperature={props.temperature} />
        <span className="temperature">
          {calculateFahrenheit(props.temperature)}
        </span>
        <ul className="temperature-details">
          <li>
            <a href="/" onClick={convertToCelsius}>
              °C
            </a>{" "}
            | °F
          </li>
          <li>
            <i class="fas fa-long-arrow-alt-up"></i>
            {calculateFahrenheit(props.temperatureMax)}°
          </li>
          <li>
            <i class="fas fa-long-arrow-alt-down"></i>
            {calculateFahrenheit(props.temperatureMin)}°
          </li>
        </ul>
      </div>
    );
  }
}

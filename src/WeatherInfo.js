import React from "react";

import DisplayDate from "./DisplayDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <DisplayDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <img
              src={props.data.icon}
              alt={props.data.description}
              className="float-left"
            />
            <div className="float-left">
              <span className="temperature">
                {Math.round(props.data.temperature)}
              </span>
            </div>
            <div className="float-left">
              <ul className="temperature-details">
                <li>°C | °F</li>
                <li>
                  <i class="fas fa-long-arrow-alt-up"></i>
                  {Math.round(props.data.temperatureMax)}°
                </li>
                <li>
                  <i class="fas fa-long-arrow-alt-down"></i>
                  {Math.round(props.data.temperatureMin)}°
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)} m/s</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

import React from "react";

import DisplayDate from "./DisplayDate";
import DisplayTemperature from "./DisplayTemperature";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-6">
          <h1>{props.data.city}</h1>
          <ul>
            <li>
              <DisplayDate date={props.data.date} />
            </li>
            <li className="text-capitalize">{props.data.description}</li>
          </ul>
        </div>
        <div className="col-6">
          <div className="float-left">
            <WeatherIcon code={props.data.icon} />
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <div className="float-left">
              <DisplayTemperature
                temperature={props.data.temperature}
                temperatureMin={props.data.temperatureMin}
                temperatureMax={props.data.temperatureMax}
              />
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

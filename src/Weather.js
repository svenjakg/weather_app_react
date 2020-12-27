import React from "react";

import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-8">
            <input
              className="form-control"
              type="search"
              placeholder="Enter a city ..."
            />
          </div>
          <div className="col-2">
            <input className="btn btn-primary" type="submit" value="Search" />
          </div>
          <div className="col-2">
            <input className="btn btn-success" type="submit" value="Current" />
          </div>
        </div>
      </form>
      <h1>Berlin</h1>
      <ul>
        <li>Sunday, 07:00</li>
        <li>Mostly cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="mostly cloudy"
          />
          <span>2 °C | °F</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 1%</li>
            <li>Humidity: 68%</li>
            <li>Wind: 26 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

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
      <h1>Berlin</h1>
      <ul>
        <li>Sunday, 07:00</li>
        <li>Mostly cloudy</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="mostly cloudy"
              className="float-left"
            />
            <div className="float-left">
              <span className="temperature">2</span>
              <span className="unit"> °C | °F</span>
            </div>
          </div>
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

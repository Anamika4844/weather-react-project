import React from "react";
import "./Weather.css";
export default function Weather() {
  return (
    <div className="Weather">
      <div className="row">
        <div className="col-9">
          <input
            type="search"
            placeholder="Enter a city "
            className="form-control"
            autoFocus="on"
          ></input>
        </div>
        <div className="col-3">
          <input
            type="submit"
            value="Search"
            className="btn btn-primary w-100"
          ></input>
        </div>
      </div>
      <h1> New York</h1>
      <ul>
        <li>Wednesday 7:00</li>
        <li>Mostly sunny</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt="mostly sunny"
              className="float-left"
            ></img>
            <div className="float-left">
              <span className="temperature">6 </span>{" "}
              <span className="unit">°C</span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Presipitation: </li>
            <li> Humidity: </li>
            <li> Wind: </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

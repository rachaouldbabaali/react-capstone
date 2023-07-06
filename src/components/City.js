import React from 'react';
import { Link } from 'react-router-dom';
import store from '../redux/store';
import '../styles/City.css';

const WeatherDetails = () => {
  const details = store.getState();
  return (
    <div
      className="cityweather"
      key={details.weather.weather.id}
    >
      <h1>
        Weather Today in
        {' '}
        {details.weather.weather.name}
        <br />
        <span>
          {details.weather.weather.weather[0].description}
        </span>
      </h1>
      <div className="container2">
        <div className="icon">
          <img src={`http://openweathermap.org/img/w/${details.weather.weather.weather[0].icon}.png`} alt="weather icon" />
        </div>
        <div className="info">
          <p>
            temperature:
            {'  '}
            {Math.round(details.weather.weather.main.temp - 273.15)}
            °C
          </p>
          <p>
            humidity:
            {'  '}
            {details.weather.weather.main.humidity}
            {'  '}
            %
          </p>
          <div>
            <Link to="/Details">
              <button type="button">
                More Details
              </button>
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
};

export default WeatherDetails;

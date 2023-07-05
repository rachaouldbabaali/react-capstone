/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import store from '../redux/store';

const WeatherDetails = () => {
  const details = store.getState();
  return (
    <div
      className="cityweather"
      key={details.weather.weather.id}
    >
      <p>
        city name:
        {details.weather.weather.name}
      </p>
      <div className="icon">
        <img src={`http://openweathermap.org/img/w/${details.weather.weather.weather[0].icon}.png`} alt="weather icon" />
      </div>
      <p>
        temperature:
        {details.weather.weather.main.temp}
      </p>
      <p>
        wind:
        {details.weather.weather.wind.speed}
      </p>
      <p>
        humidity:
        {details.weather.weather.main.humidity}
      </p>
      <div>
        <Link to="/Details">
          <button type="button">
            Details
          </button>
        </Link>
      </div>

    </div>
  );
};

WeatherDetails.propTypes = {
  // eslint-disable-next-line react/require-default-props
  details: PropTypes.shape({
    weather: PropTypes.shape({
      name: PropTypes.string,
      main: PropTypes.shape({
        temp: PropTypes.number,
        humidity: PropTypes.number,
      }),
      wind: PropTypes.shape({
        speed: PropTypes.number,
      }),
    }),
  }),
};

export default WeatherDetails;

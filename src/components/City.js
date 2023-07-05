/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Details from './Details';
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
        <Details
          selectedCity={details.weather.weather.name}
          temperature={details.weather.weather.main.temp}
          wind={details.weather.weather.wind.speed}
          humidity={details.weather.weather.main.humidity}
        />
      </div>
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
  selectedCity: PropTypes.shape({
    name: PropTypes.string.isRequired,
    countryCode: PropTypes.string.isRequired,
  }).isRequired,

};

export default WeatherDetails;

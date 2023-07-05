/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import store from '../redux/store';

const Details = () => {
  const details = store.getState();
  return (
    <div>
      <div>
        <p>
          Weather Details for
          {details.weather.weather.name}
        </p>
        <div className="icon">
          <img src={`http://openweathermap.org/img/w/${details.weather.weather.weather[0].icon}.png`} alt="weather icon" />
        </div>
        <table>
          <tbody>
            <tr>
              <td>Descreption</td>
              <td>{details.weather.weather.weather[0].description}</td>
            </tr>
            <tr>
              <td>temperature:</td>
              <td>{details.weather.weather.main.temp}</td>
            </tr>
            <tr>
              <td>Tempreature Min</td>
              <td>{details.weather.weather.main.temp_min}</td>
            </tr>
            <tr>
              <td>Tempreature Max</td>
              <td>{details.weather.weather.main.temp_max}</td>
            </tr>
            <tr>
              <td>feels_like:</td>
              <td>{details.weather.weather.main.feels_like}</td>
            </tr>
            <tr>
              <td>wind:</td>
              <td>{details.weather.weather.wind.speed}</td>
            </tr>
            <tr>
              <td>humidity:</td>
              <td>{details.weather.weather.main.humidity}</td>
            </tr>
            <tr>
              <td>pressure:</td>
              <td>{details.weather.weather.main.pressure}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

Details.propTypes = {
  selectedCity: PropTypes.shape({
    name: PropTypes.string.isRequired,
    countryCode: PropTypes.string.isRequired,
  }).isRequired,
};

export default Details;

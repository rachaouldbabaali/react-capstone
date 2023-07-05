import React from 'react';
import PropTypes from 'prop-types';

const WeatherDetails = ({
  selectedCity, temperature, wind, icon,
}) => (
  <div className="cityweather">
    <p>
      city name:
      {selectedCity.name}
    </p>
    <p>
      country code:
      {selectedCity.countryCode}
    </p>
    <p>
      temperature:
      {temperature}
    </p>
    <p>
      wind:
      {wind}
    </p>
    <img src={`http://openweathermap.org/img/w/${icon}.png`} alt="weather icon" />
  </div>
);

WeatherDetails.propTypes = {
  selectedCity: PropTypes.shape({
    name: PropTypes.string.isRequired,
    countryCode: PropTypes.string.isRequired,
  }).isRequired,
  temperature: PropTypes.number.isRequired,
  wind: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired,
};

export default WeatherDetails;

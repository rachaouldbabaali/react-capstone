import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather } from '../redux/weatherSlice';
import cities from '../data/cities.json';

const Heading = () => {
  const [selectedCity, setSelectedCity] = useState(cities[0]);
  const dispatch = useDispatch();
  const {
    temperature, wind, icon, isLoading, error,
  } = useSelector((state) => state.weather);

  useEffect(() => {
    dispatch(fetchWeather(selectedCity));
  }, [dispatch, selectedCity]);

  const handleChange = (e) => {
    const [name, countryCode] = e.target.value.split(',');
    setSelectedCity({ name, countryCode });
    console.log(temperature);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchWeather(selectedCity));
  };

  return (
    <div className="heading">
      <h1>Weather App</h1>
      <form onSubmit={handleSubmit}>
        <select value={`${selectedCity.name},${selectedCity.countryCode}`} onChange={handleChange}>
          {cities.map((city) => (
            <option key={`${city.name},${city.countryCode}`} value={`${city.name},${city.countryCode}`}>
              {city.name}
            </option>
          ))}
        </select>
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Get Weather'}
        </button>
      </form>
      {error && <p>{error}</p>}
      {temperature && wind && (
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
      )}
    </div>
  );
};

export default Heading;

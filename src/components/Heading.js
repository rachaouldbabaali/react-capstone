import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather } from '../redux/weatherSlice';
import City from './City';
import cities from '../data/cities.json';
import Navbar from './Navbar';

const Heading = () => {
  const [selectedCity, setSelectedCity] = useState(() => {
    const storedCity = localStorage.getItem('selectedCity');
    return storedCity ? JSON.parse(storedCity) : cities[0];
  });
  const dispatch = useDispatch();
  const {
    temperature, isLoading, error,
  } = useSelector((state) => state.weather);

  useEffect(() => {
    dispatch(fetchWeather(selectedCity));
    localStorage.setItem('selectedCity', JSON.stringify(selectedCity));
  }, [dispatch, selectedCity]);

  const handleChange = (e) => {
    const [name, countryCode] = e.target.value.split(',');
    setSelectedCity({ name, countryCode });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchWeather(selectedCity));
  };

  return (
    <>
      <Navbar />
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
        {temperature && (
        <City />
        )}
      </div>
    </>
  );
};

export default Heading;

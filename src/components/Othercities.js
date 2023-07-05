import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchWeather } from '../redux/weatherSlice';

const OtherCities = () => {
  const dispatch = useDispatch();
  const othercities = useSelector((state) => state.weather.othercities);

  useEffect(() => {
    othercities.forEach((city) => {
      dispatch(fetchWeather(city));
    });
  }, [dispatch, othercities]);

  return (
    <div>
      <h2>Other Cities</h2>
      <ul>
        {othercities.map((city) => (
          <li key={city.id}>
            <p>{city.name}</p>
            <p>
              Temperature:
              {' '}
              {city.weather ? city.weather.temp : 'loading...'}
            </p>
            <p>
              Pressure:
              {' '}
              {city.weather ? city.weather.pressure : 'loading...'}
            </p>
            <p>
              Humidity:
              {' '}
              {city.weather ? city.weather.humidity : 'loading...'}
            </p>
            <p>
              Wind:
              {' '}
              {city.weather ? city.weather.wind : 'loading...'}
            </p>
            <p>
              {city.weather ? (
                <img
                  src={`https://openweathermap.org/img/w/${city.weather.icon}.png`}
                  alt={city.weather.description}
                />
              ) : (
                'loading...'
              )}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OtherCities;

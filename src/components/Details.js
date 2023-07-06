import React from 'react';
import PropTypes from 'prop-types';
import store from '../redux/store';
import Navbar from './Navbar';
import '../styles/Details.css';

const Details = () => {
  const details = store.getState();
  window.scrollTo(0, 0);
  return (
    <>
      <Navbar />
      <div>
        <div className="details">
          <h1>
            Weather Details for
            <br />
            {details.weather.weather.name}
          </h1>
          <div className="icon">
            <img src={`http://openweathermap.org/img/w/${details.weather.weather.weather[0].icon}.png`} alt="weather icon" />
          </div>
          <table className="details-table">
            <tbody>
              <tr>
                <td>
                  The weather Today is :
                  {' '}
                  {' '}
                  <span>
                    {details.weather.weather.weather[0].description}
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  The temperature is :
                  {' '}
                  {' '}
                  {Math.round(details.weather.weather.main.temp - 273.15)}
                  {' '}
                  °C
                </td>
              </tr>
              <tr>
                <td>
                  The Minimum temperature is :
                  {' '}
                  {' '}
                  {Math.round(details.weather.weather.main.temp_min - 273.15)}
                  {' '}
                  °C
                </td>
              </tr>
              <tr>
                <td>
                  The Maximum temperature is :
                  {' '}
                  {' '}
                  {Math.round(details.weather.weather.main.temp_max - 273.15)}
                  {' '}
                  °C
                </td>
              </tr>
              <tr>
                <td>
                  Feels like:
                  {' '}
                  {' '}
                  {Math.round(details.weather.weather.main.feels_like - 273.15)}
                  {' '}
                  °C
                </td>
              </tr>
              <tr>
                <td>
                  The Wind speed is :
                  {' '}
                  {' '}
                  {details.weather.weather.wind.speed}
                  {' '}
                  m/s
                </td>
              </tr>
              <tr>
                <td>
                  The Humidity is :
                  {' '}
                  {' '}
                  {details.weather.weather.main.humidity}
                  {' '}
                  %
                </td>
              </tr>
              <tr>
                <td>
                  The Pressure is :
                  {' '}
                  {' '}
                  {details.weather.weather.main.pressure}
                  {' '}
                  hPa
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

Details.propTypes = {
  // eslint-disable-next-line react/require-default-props
  details: PropTypes.shape({
    weather: PropTypes.shape({
      name: PropTypes.string,
      main: PropTypes.shape({
        temp: PropTypes.number,
        humidity: PropTypes.number,
      }),
    }),
  }),
};

export default Details;

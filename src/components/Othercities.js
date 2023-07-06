/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Card, Col, Container, Row,
} from 'react-bootstrap';
import { fetchWeather, setCity } from '../redux/weatherSlice';
import '../styles/OtherCities.css';

import ae from '../data/maps/ae.png';
import au from '../data/maps/au.png';
import br from '../data/maps/br.png';
import fr from '../data/maps/fr.png';
import gb from '../data/maps/gb.png';
import in1 from '../data/maps/in.png';
import jp from '../data/maps/jp.png';
import us from '../data/maps/us.png';

const cities = [
  { name: 'New York', countryCode: 'us', map: us },
  { name: 'London', countryCode: 'gb', map: gb },
  { name: 'Paris', countryCode: 'fr', map: fr },
  { name: 'Tokyo', countryCode: 'jp', map: jp },
  { name: 'Dubai', countryCode: 'ae', map: ae },
  { name: 'Sydney', countryCode: 'au', map: au },
  { name: 'Sao Paulo', countryCode: 'br', map: br },
  { name: 'New Delhi', countryCode: 'in', map: in1 },
];

const Weather = () => {
  const dispatch = useDispatch();
  const [selectedCity, setSelectedCity] = useState(() => {
    const storedCity = localStorage.getItem('selectedCity');
    return storedCity ? JSON.parse(storedCity) : null;
  });
  const weather = useSelector((state) => state.weather.weather);
  const status = useSelector((state) => state.weather.status);

  const handleCityClick = (city) => {
    setSelectedCity(city);
    dispatch(setCity(city));
    dispatch(fetchWeather(city));
    localStorage.setItem('selectedCity', JSON.stringify(city));
    window.scrollTo(200, 200);
  };

  return (
    <div className="other">
      <Container>
        {cities.map((city) => (
          <Card
            key={city.name}
            onClick={() => handleCityClick(city)}
            className="city-card"
          >
            <Card.Body>
              <Card.Title>{city.name}</Card.Title>
              <div className="city-map">
                {city.map && <img src={city.map} />}
              </div>
            </Card.Body>
          </Card>

        ))}

        {selectedCity && (
          <Row>
            <Col md={12}>
              {status === 'loading' && <div>Loading...</div>}
              {status === 'failed' && <div>Failed to fetch weather data.</div>}
              {status === 'succeeded' && (
                <div>
                  <p>
                    Temperature is currently:
                    {' '}
                    {weather.main.temp}
                  </p>
                  <p>
                    Pressure:
                    {' '}
                    {weather.main.pressure}
                  </p>
                  <p>
                    Humidity:
                    {' '}
                    {weather.main.humidity}
                  </p>
                  <p>
                    Wind Speed:
                    {' '}
                    {weather.wind.speed}
                  </p>
                </div>
              )}
            </Col>
          </Row>
        )}
      </Container>
    </div>
  );
};

export default Weather;

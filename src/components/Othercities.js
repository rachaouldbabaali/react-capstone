import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Button, Card, Col, Container, Row,
} from 'react-bootstrap';
import { fetchWeather, setCity } from '../redux/weatherSlice';
import '../styles/OtherCities.css';

const cities = [
  { name: 'New York', countryCode: 'us' },
  { name: 'London', countryCode: 'gb' },
  { name: 'Paris', countryCode: 'fr' },
  { name: 'Tokyo', countryCode: 'jp' },
  { name: 'Sydney', countryCode: 'au' },
  { name: 'Dubai', countryCode: 'ae' },
  { name: 'Mumbai', countryCode: 'in' },
  { name: 'Rio de Janeiro', countryCode: 'br' },
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
    <div>
      <Container>
        {cities.map((city) => (
          <Card
            key={city.name}
            onClick={() => handleCityClick(city)}
            className="city-card"
            style={{ backgroundImage: "url('../data/maps/ae.png')" }}
          >
            <Card.Body>
              <Card.Title>{city.name}</Card.Title>
              <Card.Text>{}</Card.Text>
              <Button
                variant="primary"
                onClick={() => handleCityClick(city)}
              >
                Details here
              </Button>
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

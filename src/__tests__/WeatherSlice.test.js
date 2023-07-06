import { configureStore } from '@reduxjs/toolkit';
import weatherReducer, { fetchWeather } from '../redux/weatherSlice';

const store = configureStore({
  reducer: {
    weather: weatherReducer,
  },
});

describe('WeatherSlice', () => {
  test('should return the initial state', () => {
    expect(weatherReducer(undefined, {})).toEqual({
      weather: {
        name: 'area',
        weather: [{ main: '', description: '', icon: '' }],
        main: { temp: null, pressure: null, humidity: null },
        wind: { speed: '' },
      },
    });
  });

  test('should handle fetchWeather', () => {
    const { previousCity } = store.getState().weather;
    const city = { name: 'London', countryCode: 'uk' };
    store.dispatch(fetchWeather(city));
    expect(store.getState().weather.previousCity).toEqual(previousCity);
  });
});

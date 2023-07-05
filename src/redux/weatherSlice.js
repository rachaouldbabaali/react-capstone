import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  weather: {
    name: 'area',
    weather: [{ main: '', description: '', icon: '' }],
    main: { temp: null, pressure: null, humidity: null },
    wind: { speed: '' },
  },
  othercities: [],
};
export const fetchWeather = createAsyncThunk(
  'weather/fetchWeather',
  async (city) => {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city.name},${city.countryCode}&appid=86cc7b280074d7bb76827e5234868aa1`,
    );
    return response.data;
  },
);

const othercities = [];
// eslint-disable-next-line no-unused-vars
const fetchcity1 = createAsyncThunk('https://api.openweathermap.org/data/2.5/weather?q=London,GB&appid=86cc7b280074d7bb76827e5234868aa1');
const city1 = {
  name: 'London',
  id: 4,
};
othercities.push(city1);

const fetchcity2 = createAsyncThunk('https://api.openweathermap.org/data/2.5/weather?q=Paris,FR&appid=86cc7b280074d7bb76827e5234868aa1');
const city2 = {
  name: 'Paris',
  id: 5,
  weather: {
    temp: fetchcity2.main.temp,
    pressure: fetchcity2.main.pressure,
    humidity: fetchcity2.main.humidity,
    wind: fetchcity2.wind.speed,
    icon: fetchcity2.weather[0].icon,
    description: fetchcity2.weather[0].description,
  },
};
othercities.push(city2);

const fetchcity3 = createAsyncThunk('https://api.openweathermap.org/data/2.5/weather?q=Berlin,DE&appid=86cc7b280074d7bb76827e5234868aa1');
const city3 = {
  name: 'Berlin',
  id: 6,
  weather: {
    temp: fetchcity3.main.temp,
    pressure: fetchcity3.main.pressure,
    humidity: fetchcity3.main.humidity,
    wind: fetchcity3.wind.speed,
    icon: fetchcity3.weather[0].icon,
    description: fetchcity3.weather[0].description,
  },
};
othercities.push(city3);

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  othercities,
  reducers: {
    setCity(state, action) {
      const { name, countryCode } = action.payload;
      state.previousCity = state.weather.city;
      state.weather.city = name;
      state.weather.countryCode = countryCode;
    },
    getCity(state, action) {
      state.weather.city = action.payload;
    },
    getWeather(state, action) {
      state.weather = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.status = initialState.status;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.status = 'idle';
        state.weather = action.payload;
        state.temperature = action.payload.main.temp;
        state.wind = action.payload.wind.speed;
        state.icon = action.payload.weather[0].icon;
        state.name = action.payload.name;
        state.humidity = action.payload.main.humidity;
        state.pressure = action.payload.main.pressure;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.status = 'idle';
        state.error = action.error.message;
      });
  },
});

export const { setCity, getWeather, getCity } = weatherSlice.actions;

export default weatherSlice.reducer;

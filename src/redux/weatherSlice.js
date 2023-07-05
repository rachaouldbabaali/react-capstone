import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  weather: {
    name: 'area',
    weather: [{ main: '', description: '', icon: '' }],
    main: { temp: null, pressure: '', humidity: '' },
    wind: { speed: '' },
  },
};
export const fetchWeather = createAsyncThunk(
  'weather/fetchWeather',
  async (city) => {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city.name},${city.countryCode}&appid=86cc7b280074d7bb76827e5234868aa1`,
    );
    return response.data;
    // eslint-disable-next-line no-unreachable
    console.log(response.data);
  },
);

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setCity(state, action) {
      const { name, countryCode } = action.payload;
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
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.status = 'idle';
        state.error = action.error.message;
      });
  },
});

export const { setCity, getWeather, getCity } = weatherSlice.actions;

export default weatherSlice.reducer;

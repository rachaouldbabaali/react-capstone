import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Autosuggest from 'react-autosuggest';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { fetchWeather } from '../redux/weatherSlice';
import cities from '../data/cities.json';
import Navbar from './Navbar';
import '../styles/Heading.css';
import City from './City';

const Heading = () => {
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const dispatch = useDispatch();
  const {
    error, temperature,
  } = useSelector((state) => state.weather);

  const getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    return inputLength === 0 ? [] : cities.filter((city) => city
      .name.toLowerCase().slice(0, inputLength) === inputValue);
  };

  const getSuggestionValue = (suggestion) => `${suggestion.name}`;

  const renderSuggestion = (suggestion) => <div>{suggestion.name}</div>;

  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value));
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const onSuggestionSelected = (event, { suggestionValue }) => {
    const [name, countryCode] = suggestionValue.split(',');
    const selectedCity = { name, countryCode };
    setValue(suggestionValue);
    dispatch(fetchWeather(selectedCity));
  };

  const onChange = (event, { newValue }) => {
    setValue(newValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const [name, countryCode] = value.split(',');
    const selectedCity = { name, countryCode };
    dispatch(fetchWeather(selectedCity));
  };

  useEffect(() => {
    const storedCity = localStorage.getItem('selectedCity');
    const initialCity = storedCity ? JSON.parse(storedCity) : cities[0];
    setValue(`${initialCity.name}`);
    dispatch(fetchWeather(initialCity));
  }, [dispatch]);

  const inputProps = {
    placeholder: 'Search for a city...',
    before: <FontAwesomeIcon icon={faSearch} />,
    value,
    onChange,
  };

  return (
    <>
      <Navbar />
      <div className="heading">
        <h1>Weather Today</h1>
        <form onSubmit={handleSubmit} className="seggestionsForm">
          <Autosuggest
            className="search"
            suggestions={suggestions}
            onSuggestionsFetchRequested={onSuggestionsFetchRequested}
            onSuggestionsClearRequested={onSuggestionsClearRequested}
            onSuggestionSelected={onSuggestionSelected}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            inputProps={inputProps}
          />
          {error && <p>{error}</p>}
        </form>
      </div>
      {temperature && (
      <div className="City">
        <City />
      </div>
      )}
    </>
  );
};

export default Heading;

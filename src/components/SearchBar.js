/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { faSearch } from 'React-icons/fa';
import { useDispatch } from 'react-redux';
import { fetchWeather } from '../redux/weatherSlice';

const SearchBar = () => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  const fetchSearch = async (e) => {
    e.preventDefault();
    dispatch(fetchWeather(search));
    setSearch('');
  };

    <div className="search-bar">
      <input type="text" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
      <faSearch id="search-icon" />
    </div>;
};

export default SearchBar;

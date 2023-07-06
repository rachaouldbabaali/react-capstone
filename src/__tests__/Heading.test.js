import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import Heading from '../components/Heading';
import '@testing-library/jest-dom/extend-expect';

describe('Heading component', () => {
  let store;

  beforeEach(() => {
    store = configureStore([thunk])({
      weather: {
        temperature: 20,
      },
    });
  });

  test('renders the search input', () => {
    const { getByPlaceholderText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Heading />
        </BrowserRouter>
      </Provider>,
    );

    const searchInput = getByPlaceholderText('Search for a city...');
    expect(searchInput).toBeInTheDocument();
  });
});

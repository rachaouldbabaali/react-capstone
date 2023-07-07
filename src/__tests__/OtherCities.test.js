import React from 'react';
import { useSelector, useDispatch, Provider } from 'react-redux';
import { render } from '@testing-library/react';
import Weather from '../components/Othercities';
import store from '../redux/store';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

describe('Weather component', () => {
  beforeEach(() => {
    useSelector.mockImplementation((callback) => callback({
      weather: {
        weather: null,
      },
      status: null,
    }));
    useDispatch.mockReturnValue(jest.fn());
  });

  test('renders correctly', () => {
    const { container } = render(
      <Provider store={store}>
        <Weather />
      </Provider>,
    );

    expect(container).toMatchSnapshot();
  });
});

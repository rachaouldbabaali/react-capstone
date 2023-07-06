import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Details from '../components/Details';
import store from '../redux/store';

describe('Details component', () => {
  test('renders weather details for a city', () => {
    const mockDetails = {
      weather: {
        weather: {
          id: 800,
          name: 'London',
          weather: [
            {
              icon: '01d',
              description: 'clear sky',
            },
          ],
          main: {
            temp: 293.15,
            temp_min: 291.15,
            temp_max: 295.15,
            feels_like: 290.15,
            humidity: 50,
            pressure: 1013,
          },
          wind: {
            speed: 5,
          },
        },
      },
    };
    const { container } = render(
      <Provider store={store}>
        <Details details={mockDetails} />
      </Provider>,
    );

    expect(container).toMatchSnapshot();
  });

  test('renders message for unsupported location', () => {
    const mockDetails = {
      weather: {
        weather: {
          name: 'area',
        },
      },
    };
    const { container } = render(
      <Provider store={store}>
        <Details details={mockDetails} />
      </Provider>,
    );

    expect(container).toMatchSnapshot();
  });
});

import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './app/store';
import App from './App';

test('does not throw', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
});

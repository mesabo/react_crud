import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './infrastructure/store/store';
import App from './presentation/App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import 'tachyons/css/tachyons.css'
import 'font-awesome/css/font-awesome.css'

import { Provider } from 'react-redux'
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

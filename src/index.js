import './index.css';

import App from './App';
import { Provider } from 'react-redux'
import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './Store'

window.store = store

ReactDOM.render(
  <Provider store={ store }>
    <App/>
  </Provider>, document.getElementById('root'));

import './index.css';

import App from './App';
import Ingredients from './views/Ingredients';
import {Provider} from 'react-redux'
import React from 'react';
import ReactDOM from 'react-dom';
import {store} from './Store'

window.store = store

ReactDOM.render(
  <Provider store={store}>
  <Ingredients/>
</Provider>, document.getElementById('root'));

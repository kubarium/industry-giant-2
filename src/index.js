import './index.css';

import App from './containers/App';
import {Provider} from 'react-redux'
import React from 'react';
import ReactDOM from 'react-dom';
import Utils from './Utils'
import {createStore} from 'redux'
import products from './data/products.json'
import reducers from './Reducers';
import sortings from './data/sortings.json'
import stores from './data/stores.json'

let store = createStore(reducers, {
    products: localStorage["products"]
        ? JSON.parse(localStorage["products"])
        : products,
    ingredients: Utils.rawIngredients,
    sortings,
    stores,
    date: 2019
})

window.store = store

ReactDOM.render(
    <Provider store={store}>
    <App/>
</Provider>, document.getElementById('root'));

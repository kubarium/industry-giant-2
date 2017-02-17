import { createStore } from 'redux'
import products from './data.json'
import reducers from './Reducers';

export const store = createStore(reducers, {
    products,ingredients: [],date: 1970
})
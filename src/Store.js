import { createStore } from 'redux'
import products from './data.json'
import reducers from './Reducers';

export const store = createStore(reducers, {
    products: localStorage["products"] ? JSON.parse(localStorage["products"]) : products,
    ingredients: [],
    sort: "name",
    stores: ["Grocery", "Toys", "Home Appliances", "Furniture", "Clothing", "Home Hardware", "Sports", "Electronics", "Instruments", "Gas Station", "Car Dealer"],
    date: 2019
})

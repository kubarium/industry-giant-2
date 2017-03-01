import {createStore} from 'redux'
import products from './data.json'
import reducers from './Reducers';

export const store = createStore(reducers, {
    products: localStorage["products"]
        ? JSON.parse(localStorage["products"])
        : products,
    ingredients: products
        .filter(product => product.raw)
        .map((product, index) => Object.assign({}, {
            index,
            name: product.name,
            active: false
        })),
    sort: "name",
    stores: [
        {
            index: 0,
            name: "Grocery",
            active: true
        }, {
            index: 1,
            name: "Toys",
            active: false
        }, {
            index: 2,
            name: "Home Appliances",
            active: false
        }, {
            index: 3,
            name: "Furniture",
            active: false
        }, {
            index: 4,
            name: "Clothing",
            active: true
        }, {
            index: 5,
            name: "Home Hardware",
            active: false
        }, {
            index: 6,
            name: "Sports",
            active: false
        }, {
            index: 7,
            name: "Electronics",
            active: false
        }, {
            index: 8,
            name: "Instruments",
            active: false
        }, {
            index: 9,
            name: "Gas Station",
            active: false
        }, {
            index: 10,
            name: "Car Dealer",
            active: false
        }
    ],
    date: 2019
})

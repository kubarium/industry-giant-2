import React, { Component } from 'react';

import { ListGroup } from 'react-bootstrap'
import Product from './views/Product'
import Utils from './Utils'
import { store } from './Store'

export default class Products extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: store
                .getState()
                .products
        }
    }
    componentDidMount() {
        store.subscribe(() => this.setState({
            products: store
                .getState()
                .products
        }))
    }

    sortBy = (a, b) => {
        const sortBy = store.getState().sort
        const sign = sortBy === "name" ? -1 : 1
        return a[sortBy] < b[sortBy] ? 1 * sign : a[sortBy] > b[sortBy] ? -1 * sign : 0
    }

    render() {
        let product = "Crocodile Handbags"
        product = "Digital Decoder"
        console.log(product)
        console.log(Utils.GetProduct(product))
        //console.log(Utils.FilterByIngredients(store.getState().ingredients))
        console.log((Utils.FullCompositionList(product)))
        console.log(Utils.BreakdownToRawIngredients(Utils.FullCompositionList(product)))
        console.log(Utils.BreakdownToRawIngredients(Utils.FullCompositionList(product)).includes("Leather"))        
        let products = Utils.FilterByIngredients(store.getState().ingredients.map(ingredient=>ingredient.name))
            .filter(product => product.merchandisable === true)
            .filter(product => product.date <= store.getState().date)

        const openStores = store.getState().stores.filter(store=>store.active === true).map(store=>store.name)

        /*if (store.getState().stores)
        */
        products = products.filter(product => openStores.includes(product.soldAt))
        

        products.sort(this.sortBy)

        return (
            <ListGroup>
              { products.map(product => <Product key={ product.name } product={ product } />) }
            </ListGroup>
        )
    }
}

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
        //console.log(Utils.GetProduct("Digital Decoder"))
        //console.log(Utils.BreakdownToRawIngredients(Utils.FullCompositionList("Digital Decoder")))
        let products = Utils.FilterByIngredients(store.getState().ingredients)
            .filter(product => product.merchandisable === true)
            .filter(product => product.date <= store.getState().date)

        if (store.getState().stores)
            products = products.filter(product => store.getState().stores.includes(product.soldAt))

        products.sort(this.sortBy)

        return (
            <ListGroup>
              { products.map(product => <Product key={ product.name } product={ product } />) }
            </ListGroup>
        )
    }
}

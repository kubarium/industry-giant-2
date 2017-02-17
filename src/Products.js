import React, { Component } from 'react';

import { ListGroup } from 'react-bootstrap'
import Product from './Product'
import Utils from './Utils'
import { store } from './Store'

export default class Products extends Component {

    componentDidMount() {
        store.subscribe(() => this.setState({products:store.getState().products}))
    }
    constructor(props) {
        super(props)
        this.state = {
            products:store.getState().products
        }
    }

    render() {

        let products = Utils.FilterByIngredients(store.getState().ingredients).filter(product => product.date <= store.getState().date)
        return (
            <ListGroup>
              { products
                    .map(product => <Product key={ product.name } product={ product } />) }
            </ListGroup>
        )
    }
}

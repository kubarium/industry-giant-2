import React, {Component} from 'react';
import {ListGroup} from 'react-bootstrap'
import Product from './Product'

export default class Products extends Component {
componentDidUpdate(prevProps, prevState) {
    console.log(this)
}

    render() {
        return (
            <ListGroup>
                {this
            .props
            .products
            .map(product => <Product key={product.name} data={product}/>)}
            </ListGroup>
        )
    }
}

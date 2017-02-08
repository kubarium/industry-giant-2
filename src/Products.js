import React, {Component} from 'react';
import {ListGroup} from 'react-bootstrap'
import Product from './Product'

export default class Products extends Component {

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

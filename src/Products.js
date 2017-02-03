import React, {Component} from 'react';
import data from './data.json'
import {ListGroup} from 'react-bootstrap'
import Product from './Product'

export default class Products extends Component {
    
    render() {
        const products = Object
            .keys(data)
            .map(item => <Product
                key={item}
                data={Object.assign({}, {
                name: item
            }, data[item])}/>)

        return (
            <ListGroup>
                {products}
            </ListGroup>
        )
    }
}

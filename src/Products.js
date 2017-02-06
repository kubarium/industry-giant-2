import React, {Component} from 'react';
import {ListGroup} from 'react-bootstrap'
import Product from './Product'
import Utils from './Utils'


export default class Products extends Component {

    render() {
        let products = Utils.filterByDate(this.props.dateRange)

        if (this.props.ingredients.length){
            //products = Utils.filterByIngredients(products, this.props.ingredients)
        }


        products = products.map(product => <Product key={product.name} data={product}/>)
console.log(products.length)
        return (
            <ListGroup>
                {products}
            </ListGroup>
        )
    }
}

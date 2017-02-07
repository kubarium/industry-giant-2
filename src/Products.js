import React, {Component} from 'react';
import {ListGroup} from 'react-bootstrap'
import Product from './Product'

export default class Products extends Component {

    render() {

        const products = this
            .props
            .products
            .map(product => <Product key={product.name} data={product}/>)

        console.log("how many",products.length)
        /*const item =  "Push Button Phone"
console.log(Utils.fullCompositionList(item))
console.log(Utils.breakdownToRawIngredients(Utils.fullCompositionList(item)))
        */
        return (
            <ListGroup>
                {products}
            </ListGroup>
        )
    }
}

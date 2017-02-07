import React, {Component} from 'react';
import {ListGroup} from 'react-bootstrap'
import Product from './Product'

export default class Products extends Component {

    render() {

        //console.log("how many",this.props.products.length)
        
        /*const item =  "Push Button Phone"
console.log(Utils.fullCompositionList(item))
console.log(Utils.breakdownToRawIngredients(Utils.fullCompositionList(item)))
        */
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

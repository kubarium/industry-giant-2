import React, {Component} from 'react';
import {ListGroup} from 'react-bootstrap'
import Product from './Product'
import Utils from './Utils'

//console.log(Utils.RawIngredients()) console.log(Utils.ImmediateBuildList())

export default class Products extends Component {

    render() {
        let products = Utils.filterByDate(this.props.dateRange)
/*
        if (this.props.ingredients.length){
            console.log(this.props.ingredients.length)
            products = Utils.filterByIngredients(products, this.props.ingredients)
Utils.RawIngredients()
        }*/


        products = products.map(product => <Product key={product.name} data={product}/>)

        return (
            <ListGroup>
                {products}
            </ListGroup>
        )
    }
}

import React, { Component } from 'react';

import { ListGroup } from 'react-bootstrap'
import Product from './Product'
import Utils from '../Utils'

export default class Products extends Component {


    sortBy = (a, b) => {
        const sortBy = this.props.store.sortings.filter(sorting => sorting.active)[0].by
        const sign = sortBy === "name" ? -1 : 1
        return a[sortBy] < b[sortBy] ? 1 * sign : a[sortBy] > b[sortBy] ? -1 * sign : 0
    }

    render() {
        /*let product = "Crocodile Handbags"
        //product = "Digital Decoder"
        console.log(product)
        console.log(Utils.GetProduct(product))
        console.log((Utils.FullCompositionList(product)).includes("Leather"))
        console.log((Utils.FullCompositionList(product)))
        */
        const openStores = this.props.store.stores.filter(store => store.active === true).map(store => store.name)
        

        const products = Utils.FilterByIngredients(this.props.store.products, this.props.store.ingredients)
            .filter(product => product.date <= this.props.store.date)
            .filter(product => openStores.includes(product.soldAt))
            .sort(this.sortBy)
            .map(product => <Product 
                                key={ product.name } 
                                product={ product } 
                                onDemandChange={(demand)=>this.props.demandChange(Object.assign({},product,{demand}))} 
                                onPriceChange={(priceAdjustment)=>this.props.priceChange(Object.assign({},product,{priceAdjustment}))} 
                                sortByDemand={this.props.store.sortings[3].active} 
                                sortByTotalProfit={this.props.store.sortings[1].active} 
                                sortByTotalCost={this.props.store.sortings[2].active}/>)
        

        return (
            <ListGroup>
              { products }
            </ListGroup>
        )
    }
}

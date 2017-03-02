import React, { Component } from 'react';

import { ListGroup } from 'react-bootstrap'
import Product from './views/Product'
import Utils from './Utils'
import {connect} from 'react-redux'

//import { store } from './Store'
const mapStateToProps = (state) => {
    return {products: state.products}
}

const mapDispatchToProps = (dispatch) => {
    return {
        /*addRecipient: () => {
            dispatch(Actions.addRecipient())
        },
        updateRecipient: (recipient) => {
            dispatch(Actions.updateRecipient(recipient))
        },
        deleteRecipient: (index) => {
            dispatch(Actions.deleteRecipient(index))
        }*/
    }
}
 class Products extends Component {
    /*constructor(props) {
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
    }*/

    sortBy = (a, b) => {
        const sortBy = this.props.sortings.filter(sorting=>sorting.active)[0].by
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
        const openStores = this.props.stores.filter(store => store.active === true).map(store => store.name)
        
        let products = Utils.FilterByIngredients()
            .filter(product => product.date <= this.props.date)
            .filter(product => openStores.includes(product.soldAt))
        

        products.sort(this.sortBy)

        return (
            <ListGroup>
              { products.map(product => <Product key={ product.name } product={ product } />) }
            </ListGroup>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Products)

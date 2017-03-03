import * as Actions from '../Actions'

import Products from '../views/Products'
import {connect} from 'react-redux'

const mapStateToProps = (state) => {
    return {store: state}
}

const mapDispatchToProps = (dispatch) => {
    return {
        demandChange: (product) => {
            dispatch(Actions.demandChange(product))
        },
        priceChange: (product) => {
            dispatch(Actions.priceChange(product))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)
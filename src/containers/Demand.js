import * as Actions from '../Actions'

import Demand from '../views/Demand'
import {connect} from 'react-redux'

const mapStateToProps = (state, ownProps) => {
    return {
        demand: state.products[ownProps.index].demand,
        product: state.products[ownProps.index]
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        demandChange: (product) => {
            dispatch(Actions.demandChange(product))
        }
    }
}

function mergeProps(stateProps, dispatchProps, ownProps) {
    return Object.assign({}, ownProps, {
        demand: stateProps.demand,
        demandChange: (demand) => dispatchProps.demandChange(Object.assign({}, stateProps.product, {demand}))
    })
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Demand)
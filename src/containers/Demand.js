import * as Actions from '../Actions'

import Demand from '../views/Demand'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        /*demandChange: (product) => {
            dispatch(Actions.demandChange(product))
        }*/
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Demand)
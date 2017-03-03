import * as Actions from '../Actions'

import Stores from '../views/Stores'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return {
        stores: state.stores
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        storeChange: (index) => {
            dispatch(Actions.storeChange(index))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Stores)
import * as Actions from '../Actions'

import Sort from '../views/Sort'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return {
        sortings: state.sortings
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sortChange: (index) => {
            dispatch(Actions.sortChange(index))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sort)
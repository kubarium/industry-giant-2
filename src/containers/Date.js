import * as Actions from '../Actions'

import Date from '../views/Date'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return {
        date: state.date
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dateChange: (date) => {
            dispatch(Actions.dateChange(date))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Date)
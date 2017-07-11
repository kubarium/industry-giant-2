//import * as Actions from '../Actions'

import App from '../views/App'
import {connect} from 'react-redux'

const mapStateToProps = (state) => {
    return {
        date:state.date,
        sortBy: state
            .sortings
            .filter(sorting => sorting.active)[0]
            .icon
    }
}

export default connect(mapStateToProps, null)(App)
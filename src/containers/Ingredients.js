import * as Actions from '../Actions'

import Ingredients from '../views/Ingredients'
import {connect} from 'react-redux'

const mapStateToProps = (state) => {
    return {ingredients: state.ingredients}
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleIngredient: (index) => {
            dispatch(Actions.toggleIngredient(index))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Ingredients)
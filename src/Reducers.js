import ActionTypes from './ActionTypes';

const reducers = (state, action) => {
    let ingredients = []

    switch (action.type) {
        case ActionTypes.TOGGLE_INGREDIENT:
            ingredients = state.ingredients
            const index = ingredients.indexOf(action.ingredient)
            index > -1 ? ingredients.splice(index, 1) : ingredients.push(action.ingredient)

            return Object.assign({},
                state, {
                    ingredients
                })
        case ActionTypes.DATE_CHANGE:
            return Object.assign({}, 
                state
            , {
                date: action.date
            })
        case ActionTypes.DEMAND_CHANGE:
            let products = state.products            
            products[action.product.index].demand = action.product.demand
            
            return Object.assign({}, 
                state
            , {
                products
            })
        default:
            return state
    }
}

export default reducers
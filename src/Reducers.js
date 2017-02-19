import ActionTypes from './ActionTypes';

const reducers = (state, action) => {
    //let ingredients = []

    switch (action.type) {
        case ActionTypes.TOGGLE_INGREDIENT:
            let ingredients = state.ingredients
            const ingredientIndex = ingredients.indexOf(action.ingredient)
            ingredientIndex > -1 ? ingredients.splice(ingredientIndex, 1) : ingredients.push(action.ingredient)

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
        case ActionTypes.STORE_CHANGE:
            let stores = state.stores
            const storeIndex = stores.indexOf(action.store)
            storeIndex > -1 ? stores.splice(storeIndex, 1) : stores.push(action.store)

            return Object.assign({},
                state, {
                    stores
                })
        case ActionTypes.DEMAND_CHANGE:
            let products = state.products
            let product = products[action.product.index]
            product.demand = parseInt(action.product.demand, 10)
            product.totalProfit = product.profit * action.product.demand
            localStorage["products"] = JSON.stringify(products)

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
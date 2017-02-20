import ActionTypes from './ActionTypes';

const reducers = (state, action) => {
    let products = []
    let product = {}

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
        case ActionTypes.SORT_CHANGE:
            return Object.assign({},
                state
                , {
                    sort: action.sort
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
            products = state.products

            product = products[action.product.index]
            product.demand = parseInt(action.product.demand, 10)
            product.totalProfit = (product.price - product.totalCost) * product.priceAdjustment / 100 * action.product.demand
            localStorage["products"] = JSON.stringify(products)

            return Object.assign({},
                state
                , {
                    products
                })
        case ActionTypes.ADJUST_PRICE:
            products = state.products

            product = products[action.product.index]
            product.priceAdjustment = parseInt(action.product.priceAdjustment, 10)
            product.totalProfit = (product.price - product.totalCost) * action.product.priceAdjustment / 100 * product.demand
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
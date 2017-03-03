import * as Actions from './Actions';

const reducers = (state, action) => {
    let products = []
    let product = {}

    switch (action.type) {
        case Actions.TOGGLE_INGREDIENT:
            let ingredients = state.ingredients.slice()
            ingredients[action.index].active = !ingredients[action.index].active

            return Object.assign({},
                state, {
                    ingredients
                })
        case Actions.DATE_CHANGE:
            return Object.assign({},
                state
                , {
                    date: action.date
                })
        case Actions.SORT_CHANGE:
            let sortings = state.sortings.slice()
            sortings.forEach(sorting => sorting.active = false)
            sortings[action.index].active = true

            return Object.assign({},
                state
                , {
                    sortings
                })
        case Actions.STORE_CHANGE:
            let stores = state.stores.slice()
            stores[action.index].active = !stores[action.index].active

            return Object.assign({},
                state, {
                    stores
                })
        case Actions.DEMAND_CHANGE:
            products = state.products.slice()

            product = products[action.product.index]
            product.demand = parseInt(action.product.demand, 10)
            product.totalProfit = (product.price - product.totalCost) * product.priceAdjustment / 100 * action.product.demand
            localStorage["products"] = JSON.stringify(products)

            return Object.assign({},
                state
                , {
                    products
                })
        case Actions.PRICE_CHANGE:
            products = state.products.slice()

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
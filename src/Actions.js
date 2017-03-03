export const DEMAND_CHANGE = 1
export const PRICE_CHANGE = 2
export const TOGGLE_INGREDIENT = 3
export const DATE_CHANGE = 4
export const STORE_CHANGE = 5
export const SORT_CHANGE = 6
export function demandChange(product) {

    return {
        type: DEMAND_CHANGE,
        product
    }

}
export function priceChange(product) {

    return {
        type: PRICE_CHANGE,
        product
    }

}
export function toggleIngredient(index) {

    return {
        type: TOGGLE_INGREDIENT,
        index
    }

}

export function dateChange(date) {

    return {
        type: DATE_CHANGE,
        date
    }

}
export function storeChange(index) {

    return {
        type: STORE_CHANGE,
        index
    }

}
export function sortChange(index) {

    return {
        type: SORT_CHANGE,
        index
    }

}
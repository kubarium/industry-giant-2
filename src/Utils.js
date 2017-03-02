import products from './data.json'
import {store} from './Store'

/*
const products = Object
    .keys(data)
    .map(product => Object.assign({}, {
        name: product
    }, data[product]))
*/
export default class Utils {
    static DESCENDING = -1
    static ASCENDING = 1
    static NAME = "name"
    static PRICE = "price"
    static DATE = "date"
    static filteredProducts = []

    static get rawIngredients() {
        return products
            .filter(product => product.composition.length === 0 && product.final !== true)
            .map(product => product.name)
    }
    /*
    isBigEnough(product) {
        return product >= 15;
    }

    static ImmediateBuildList = () => {
        const simpleItems = products
            .filter(product => data[product].composition.length === 1)
            .map(item => {
                return {item: item, composition: data[item].composition}
            })
        console.log("simpleItems", simpleItems)

        return simpleItems.filter(item => item.composition.indexOf)

        return Utils
            .RawIngredients()
            .map(ingredient => {
                return simpleItems.filter(item => item.composition.indexOf(ingredient) > -1)
            })
    }*/

    static Sort = (by, order) => {
        return Utils
            .filteredProducts
            .sort((product_a, product_b) => product_a[by] < product_b[by]
                ? -1 * order
                : product_a[by] > product_b[by]
                    ? 1 * order
                    : 0)
    }

    static Filter = (filter) => {
        Utils.filteredProducts = Utils.FilterByIngredients(filter.ingredients)
        Utils.filteredProducts = Utils.FilterByDate(filter.date)
        return Utils.Sort(Utils.NAME, Utils.ASCENDING)
    }

    static GetProduct = (name) => products.filter(product => product.name === name)[0]
    
    static FilterByIngredients = () => store
        .getState()
        .products
        .filter(product => (product.merchandisable && product.raw) || store.getState().ingredients.filter(ingredient => ingredient.active === true && Utils.FullCompositionList(product.name).includes(ingredient.name)).length)

    static FullCompositionList = (product) => Utils
        .GetProduct(product)
        .composition
        .reduce((result, current) => result.concat(Utils.GetProduct(current).raw
            ? current
            : Utils.FullCompositionList(current)), [])
        .reduce((result, current) => result.indexOf(current) === -1
            ? result.concat(current)
            : result, [])
   
}

window.Utils = Utils
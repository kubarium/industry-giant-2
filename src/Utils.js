import products from './data.json'

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
        return Utils.Sort(Utils.NAME,Utils.ASCENDING)
    }

    static GetProduct = (name) => products.filter(product=>product.name===name)[0]

    static FilterByDate = (date) => Utils
        .filteredProducts
        .filter(product => product.date <= date)

    static FilterByIngredients = (ingredients) => products.filter(product => ingredients.filter(ingredient => Utils.FullCompositionList(product.name).indexOf(ingredient) > -1).length || product.final)

    static FullCompositionList = (product) => Utils.GetProduct(product)
        .composition
        .map(ingredient => Utils.FullCompositionList(ingredient))
        .reduce((lastIngredient, newIngredient) => newIngredient.length
            ? [lastIngredient, newIngredient]
            : [lastIngredient], Utils.GetProduct(product).composition)
        .toString()

    static BreakdownToRawIngredients = (product) => product
        .split(',')
        .filter(product => products[product].composition.length === 0)
        .reduce((result, current) => result.indexOf(current) === -1
            ? result.concat(current)
            : result, [])
}

window.Utils = Utils
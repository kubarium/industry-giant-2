import products from './data.json'

export default class Utils {

    static get rawIngredients() {
        return products
            .filter(product => product.composition.length === 0 && product.final !== true)
            .map(product => product.name)
    }
   

    static GetProduct = (name) => products.filter(product => product.name === name)[0]
    static FilterByIngredients = (products, ingredients) => products.filter(product => (product.merchandisable && product.raw) || ingredients.filter(ingredient => ingredient.active === true && Utils.FullCompositionList(product.name).includes(ingredient.name)).length)


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

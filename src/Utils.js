import data from './data.json'

export default class Utils {
    static RawIngredients = () => Object
        .keys(data)
        .filter(item => data[item].composition.length === 0)

    isBigEnough(product) {
        return product >= 15;
    }

    static ImmediateBuildList = () => {
        const simpleItems = Object
            .keys(data)
            .filter(item => data[item].composition.length === 1)
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
    }

    static filterByDate = (range) => Object
        .keys(data)
        .map(product => Object.assign({}, {
            name: product
        }, data[product]))
        .filter(product => product.date >= range[0] && product.date <= range[1])

    static filterByIngredients = (products, ingredients) => products.filter(product => {
        return ingredients.filter(ingredient => product.composition.indexOf(ingredient) > -1).length
    })
/*
    static filterByIngredients = (product, ingredient) => {
        return products.map[product=>product.composition.]
    }
*/
}
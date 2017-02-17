from pandas import read_csv
from collections import OrderedDict
import json
from functools import reduce
from enum import Enum

print(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")


class ProductProperty:
    COMPOSITION = "composition"
    COST = "cost"
    DATE = "date"
    DEMAND = "demand"
    INGREDIENTS_WORTH = "ingredientsWorth"
    IS_WORTH_IT = "isWorthIt"
    MERCHANDISABLE = "merchandisable"
    NAME = "name"
    PROFIT = "profit"
    PRICE = "price"
    TOTAL_COST = "totalCost"

products = []


def prepareProducts():
    global products
    max_ingredients = 4

    converters = {"cost": int,
                  "date": int,
                  "ingredient_1": str,
                  "ingredient_2": str,
                  "ingredient_3": str,
                  "ingredient_4": str,
                  "price": int
                  }

    products = read_csv("src/data.csv", delimiter='\t',
                        converters=converters).to_dict(orient="records")

    for product in products:
        product[ProductProperty.COMPOSITION] = list()

        for i in range(1, max_ingredients + 1):
            ingredient = "ingredient_" + str(i)

            if product[ingredient] is not "":
                product[ProductProperty.COMPOSITION].append(
                    product[ingredient])

            product.pop(ingredient, None)

    # Ingredients have been consolidated into an array so we can calculate
    # price points

    for index, product in enumerate(products):
        product["index"] = index
    
        product[ProductProperty.TOTAL_COST] = totalCost(product[ProductProperty.NAME])
        product[ProductProperty.PROFIT] = product[
            ProductProperty.PRICE] - totalCost(product[ProductProperty.NAME])
        product[ProductProperty.INGREDIENTS_WORTH] = ingredientsWorth(
            product[ProductProperty.NAME])
        product[ProductProperty.IS_WORTH_IT] = isWorthIt(
            product[ProductProperty.NAME])

        index+=1

    with open("src/data.json", "w") as file:
        json.dump(products, file, indent="\t")


def getComposition(name):
    return getProperty(name, ProductProperty.COMPOSITION)


def getCost(name):
    return getProperty(name, ProductProperty.COST)


def getPrice(name):
    return getProperty(name, ProductProperty.PRICE)


def getProperty(name, property):
    return getProduct(name)[property]


def getProduct(name):
    for product in products:
        if product["name"] == name:
            return product


def totalCost(name):
    return reduce(lambda lastCost, newCost: lastCost + newCost, map(lambda ingredient: totalCost(ingredient), getComposition(name)), getCost(name))


def ingredientsWorth(name):
    return reduce(lambda lastPrice, newPrice: lastPrice + newPrice, map(lambda ingredient: getPrice(ingredient), getComposition(name)), 0)


def isWorthIt(name):
    return getProperty(name, ProductProperty.PROFIT) >= ingredientsWorth(name)


prepareProducts()

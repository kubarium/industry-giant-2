# pylint: disable=no-member
"""Ultimately prepares data.json with a few utility classes"""

import json
from functools import reduce

from pandas import read_csv

print(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")


class ProductProperty:
    """Enum values."""

    COMPOSITION = "composition"
    COST = "cost"
    DATE = "date"
    DEMAND = "demand"
    INGREDIENTS_wORTH = "ingredientsWorth"
    IS_WORTH_IT = "isWorthIt"
    MERCHANDISABLE = "merchandisable"
    NAME = "name"
    PROFIT = "profit"
    PRICE = "price"
    TOTAL_COST = "totalCost"
    TOTAL_PROFIT = "totalProfit"
    PRICE_ADJUSTMENT = "priceAdjustment"

products = []
max_ingredients = 4


class Products:
    """A utility class to prepare data.json from data.csv file."""

    @staticmethod
    def prepare_products():
        """Prepares products from a csv file."""
        global products
        global max_ingredients

        converters = {
            "cost": int,
            "date": int,
            "ingredient_1": str,
            "ingredient_2": str,
            "ingredient_3": str,
            "ingredient_4": str,
            "price": int,
            "manufacturedAt": str,
            "soldAt": str
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
            product[ProductProperty.DEMAND] = 1
            product[ProductProperty.PRICE_ADJUSTMENT] = 100

            product[ProductProperty.TOTAL_COST] = Products.total_cost(
                product[ProductProperty.NAME])
            product[ProductProperty.PROFIT] = product[
                ProductProperty.PRICE] - product[ProductProperty.TOTAL_COST]
            product[ProductProperty.TOTAL_PROFIT] = product[
                ProductProperty.PROFIT] * product[ProductProperty.DEMAND]
            product[ProductProperty.INGREDIENTS_wORTH] = Products.ingredients_worth(
                product[ProductProperty.NAME])
            product[ProductProperty.IS_WORTH_IT] = Products.is_worth_it(
                product[ProductProperty.NAME])

            index += 1

        with open("src/data.json", "w") as file:
            json.dump(products, file, indent="\t")

    @staticmethod
    def get_composition(name):
        """Returns the composition list of a product."""

        return Products.get_property(name, ProductProperty.COMPOSITION)

    @staticmethod
    def get_cost(name):
        """Returns the bare cost of manufacturing a product."""

        return Products.get_property(name, ProductProperty.COST)

    @staticmethod
    def get_price(name):
        """Returns the price of a product."""

        return Products.get_property(name, ProductProperty.PRICE)

    @staticmethod
    def get_property(name, prop):
        """Returns the value of a given property for a product."""

        return Products.get_product(name)[prop]

    @staticmethod
    def get_product(name):
        """Returns a product object from a name."""

        for product in products:
            if product["name"] == name:
                return product

    @staticmethod
    def total_cost(name):
        """Returns the total cost of manufacturing a product."""
        return reduce(lambda lastCost, newCost: lastCost + newCost, map(Products.total_cost, Products.get_composition(name)), Products.get_cost(name))

    @staticmethod
    def ingredients_worth(name):
        """Returns the total price of the ingredients of a product."""
        return reduce(lambda lastPrice, newPrice: lastPrice + newPrice, map(Products.get_price, Products.get_composition(name)), 0)

    @staticmethod
    def is_worth_it(name):
        """Returns if a product is worth the cost of its ingredients."""
        return Products.get_property(name, ProductProperty.PROFIT) >= Products.ingredients_worth(name)

Products.prepare_products()

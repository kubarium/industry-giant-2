from pandas import read_csv
import json
from functools import reduce

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
    TOTAL_PROFIT = "totalProfit"

products = []


class Products:

    def prepareProducts(self):
        global products
        max_ingredients = 4

        converters = {"cost": int,
                      "date": int,
                      "ingredient_1": str,
                      "ingredient_2": str,
                      "ingredient_3": str,
                      "ingredient_4": str,
                      "price": int,
                      "demand": int,
                      "manufacturedAt": str,
                      "soldAt": str
                      }

        csv = read_csv("src/data.csv", delimiter='\t', converters=converters)
        products = csv.to_dict(orient="records")

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

            product[ProductProperty.TOTAL_COST] = self.totalCost(
                product[ProductProperty.NAME])
            product[ProductProperty.PROFIT] = product[
                ProductProperty.PRICE] - product[ProductProperty.TOTAL_COST]
            product[ProductProperty.TOTAL_PROFIT] = product[
                ProductProperty.PROFIT] * product["demand"]
            product[ProductProperty.INGREDIENTS_WORTH] = self.ingredientsWorth(
                product[ProductProperty.NAME])
            product[ProductProperty.IS_WORTH_IT] = self.isWorthIt(
                product[ProductProperty.NAME])

            index += 1

        with open("src/data.json", "w") as file:
            json.dump(products, file, indent="\t")

    def getComposition(self, name):
        return self.getProperty(name, ProductProperty.COMPOSITION)

    def getCost(self, name):
        return self.getProperty(name, ProductProperty.COST)

    def getPrice(self, name):
        return self.getProperty(name, ProductProperty.PRICE)

    def getProperty(self, name, property):
        return self.getProduct(name)[property]

    def getProduct(self, name):
        for product in products:
            if product["name"] == name:
                return product

    def totalCost(self, name):
        return reduce(lambda lastCost, newCost: lastCost + newCost, map(lambda ingredient: self.totalCost(ingredient), self.getComposition(name)), self.getCost(name))

    def ingredientsWorth(self, name):
        return reduce(lambda lastPrice, newPrice: lastPrice + newPrice, map(lambda ingredient: self.getPrice(ingredient), self.getComposition(name)), 0)

    def isWorthIt(self, name):
        return self.getProperty(name, ProductProperty.PROFIT) >= self.ingredientsWorth(name)

Products.prepareProducts()

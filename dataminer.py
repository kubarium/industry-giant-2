from pandas import read_csv
from collections import OrderedDict
import json

print(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")

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
    product["composition"] = list()

    for i in range(1, max_ingredients + 1):
        ingredient = "ingredient_" + str(i)

        if product[ingredient] is not "":
            product["composition"].append(product[ingredient])

        product.pop(ingredient, None)


def cost(product):
    pass


def get(name):
    for product in products:
        if product["name"] == name:
            return product

with open("src/dataminer.json", "w") as file:
    json.dump(products, file, indent="\t")

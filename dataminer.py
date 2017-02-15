from pandas import read_csv
from collections import OrderedDict
import json
from functools import reduce

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


def get(name):
    for product in products:
        if product["name"] == name:
            return product

numbers = [1, 2, 3]


def cost(product):
    #global numbers
    # return list(map(lambda item : item + 1, numbers))
    return reduce((lambda lastCost, newCost: lastCost + newCost), map(lambda item: get(item)["cost"], get(product)["composition"]), get(product)["cost"])
    # print(get(product)["composition"])

item = "Garden Houses"
print(get(item)["composition"])
print(cost(item))


with open("src/data.json", "w") as file:
    json.dump(products, file, indent="\t")

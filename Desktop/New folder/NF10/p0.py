

# sorting elements using lamda func


from operator import itemgetter

l=[{"name":"Subham","age":20},

{"name":"Shreyoshi","age":19},

{"name":"Bipasha","age":21}]

print("The original list of dictionaries is  ")

print(l)

print("The list sorted by age is ")

print(sorted(l,key=lambda i : i['age']))

print("The list sorted by the name is ")

print(sorted(l,key=lambda i : i["name"]))

print("The sorted list in reversed order is ")

print(sorted(l,key=lambda i: i['age'], reverse= True))




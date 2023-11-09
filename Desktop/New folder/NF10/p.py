

# getting items in dictionary 

from operator import itemgetter

# creating a list of  dictionaries 

l=[{"name":"Subham","age":20},

{"name":"Shreyoshi","age":19},

{"name":"Bipasha","age":21}]

print("The list  of dictionaries is ")

print(l)

print("The list printed in sorting of age is ")

print(sorted(l,key=itemgetter("age")))

print("The list printed in sorted of name and age is ")

print(sorted(l,key=itemgetter('name','age')))

# printing the element in reversed order 

print("The printed list in reversed sorted of age is ")

print(sorted(l,key=itemgetter('age'),reverse=True))





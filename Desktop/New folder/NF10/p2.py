
# python key value list to flat dictionary 

from itertools import product

# creating a dict

d={'month':[1,2,3],'name':['January','February','March']}

print("The original dict is ")

print(d)

temp=dict(zip(d['month'],d['name']))

print("The flattened dictionary is ")

print(str(temp))
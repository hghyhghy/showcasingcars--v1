
from  itertools import chain

# python code to append dictionary keys and values 

# creating a dictionary

test_dict={'Subham':1, "Shreyoshi":2, "Bipasha":3}

print("The newly created dictionary is ")

print(str(test_dict))

print("Appending the key and values oif the dictionary")

temp=list(test_dict.keys())+list(test_dict.values())

print(temp)

# approach 2 by using chain 

test_dict1={'Subham':10, "Shreyoshi":20, "Bipasha":30}


print("The newly created dictionary is ")

print(str(test_dict1))

res=list(chain(test_dict1.keys()),test_dict1.values())

print("After operation the dictionary is ")

print(str(res))

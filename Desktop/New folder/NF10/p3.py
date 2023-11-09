

# python insertion at the beginning of the order dict 

from collections import OrderedDict

# creating an orderdict 

test_dict=OrderedDict([('Subham','1'),('Shreyoshi','2')])

print("The original orderdict is ")

print(str(test_dict))

test_dict.update({'Sujash':'3'})

# making it first 

test_dict.move_to_end('Sujash',last=False)

print("After Operation the orderdict is ")

print(str(test_dict))

# approach 2 

# by using native method 

test_dict0=OrderedDict([('Subham','1'),('Shreyoshi','2')])
 
test_dict1=OrderedDict([('Bipasha','10'),('Shrestha','20')])

temp=OrderedDict(list(test_dict1.items())+list(test_dict0.items()))

print("After operation the orderdict is ")

print(str(temp))



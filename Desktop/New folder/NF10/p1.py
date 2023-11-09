

# merging two dictionaries 


# creating a fucn

def ofmerge(d,d1):

    return (d1.update(d))

# creating two dict 

d={'a':1,'b':2,'c':3}

d1={'d':10,'e':20,'f':30}

print(ofmerge(d,d1))

print(d1)

# approach2 

# by using ** operator 

def merge(d0,d2):

    temp={**d0,**d2}

    return temp


d0={'a':1,'b':2,'c':3}

d2={'d':10,'e':20,'f':30}

dict3=merge(d0,d2)

print("The merged dictionaries are ")

print(dict3)

# approach 3 

def of(s0,s1):

    temp=s0|s1

    return temp


s0={'a':1,'b':2,'c':3}

s1={'d':10,'e':20,'f':30}

s2=of(s0,s1)

print("The merged dictionary is ")

print(s2)








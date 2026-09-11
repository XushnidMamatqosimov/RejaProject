message= "Hello World"
print(message);


# F task

def findDouble(text):
    for letter in text:
        if (text.count(letter) == 2 ):
            return True
    return False

res = findDouble("halol");
print(res);
    

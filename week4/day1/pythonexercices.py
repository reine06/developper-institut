'''exercice1'''
''' print("Hello world \n"*4) '''


'''exercice2 la puissance d'un nombre(3)'''
'''print((99**3) * 8)'''

'''exercice3 predire'''
'''>>> 5 < 3 true
>>> 3 == 3 true
>>> 3 == "3" false
>>> "3" > 3 error car on peut pas comparer un string avec un integer
>>> "Hello" == "hello" false'''

''' exercice 4 marque de votre ordinateur'''
'''computer_brand = input("quel est la marque de votre ordinateur?")
print("I have a {} computer".format(computer_brand))'''

'''exercice 5 vos information'''
name = "reine"
age = 15 
shoe_size = 45
info = f"je suis {name} j\'ai {age} ans et ma pointure de chaussure c'est {shoe_size}"
'''print("je suis {} j'ai {}ans  et ma pointure de chaussure c'est {}".format(name,age,shoe_size))'''
print(info)

'''exercice 6 A ET B'''
'''a = 15
b = 8
if a > b :
    print("Hello world")'''

'''exercice 7 pair ou impaire'''
'''x = int(input("entrer un nombre svp"))
if x % 2 == 0 :
    print('pair')
elif x % 2 !=0 :
    print('impair')'''

'''exercice 8 comment tu t'appele'''
'''y = input("entrez votre nom svp:\n")
myname= "reine"
if y != myname :
    print("dommage on a pas le meme nom")
elif y == myname :
    print("wouah quel coincidence")'''

'''exercice 9 assez grand'''
taille = int(input("quel est votre taille\n"))
t = 145
if taille > t :
    print("vous etes assez grands")
elif taille < t :
    print("vous devez encore grandit")

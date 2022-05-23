number = int(input('entrer un nombre compris entre 1 et 100::'))
print(number)
if number % 3 == 0 :
     print("fizz")
elif number % 5 == 0 :
     print("buzz")
elif number % 3 == 0 and number % 5 == 0 :
     print("fizz buzz")